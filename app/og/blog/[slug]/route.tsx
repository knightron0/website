import { ImageResponse } from 'next/og'
import { getBlogPosts } from 'app/blog/utils'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> | { slug: string } }
) {
  try {
    const resolvedParams = await params
    const post = getBlogPosts().find((post) => post.slug === resolvedParams.slug)
    
    if (!post) {
      return new Response('Post not found', { status: 404 })
    }

    const { title, summary, publishedAt } = post.metadata

    // Load Cormorant Garamond fonts from Google Fonts
    const fonts: Array<{ name: string; data: ArrayBuffer; style: string; weight: number }> = []
    try {
      // Fetch the CSS from Google Fonts API
      const cssResponse = await fetch(
        'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap'
      )
      const cssText = await cssResponse.text()
      
      // Extract all font-face blocks and their URLs
      // Google Fonts CSS has separate @font-face blocks for each weight
      const fontFaceRegex = /@font-face\s*\{[^}]*font-weight:\s*(\d+)[^}]*url\(([^)]+)\)[^}]*\}/g
      let match
      
      while ((match = fontFaceRegex.exec(cssText)) !== null) {
        const weight = parseInt(match[1], 10) as 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
        const fontUrl = match[2].replace(/['"]/g, '')
        
        try {
          const fontResponse = await fetch(fontUrl)
          if (fontResponse.ok) {
            const fontData = await fontResponse.arrayBuffer()
            fonts.push({
              name: 'Cormorant Garamond',
              data: fontData,
              style: 'normal',
              weight: weight,
            })
          }
        } catch (error) {
          console.error(`Failed to load font weight ${weight}:`, error)
        }
      }
    } catch (error) {
      console.error('Failed to load fonts:', error)
    }

    // Load og-design.svg image
    let ogDesignImage: string | null = null
    try {
      const url = new URL(request.url)
      const baseUrl = `${url.protocol}//${url.host}`
      const imageUrl = `${baseUrl}/og-design.svg`
      const imageResponse = await fetch(imageUrl)
      if (imageResponse.ok) {
        const imageBuffer = await imageResponse.arrayBuffer()
        // Convert ArrayBuffer to base64
        const bytes = new Uint8Array(imageBuffer)
        const binary = bytes.reduce((acc, byte) => acc + String.fromCharCode(byte), '')
        const imageBase64 = btoa(binary)
        const imageType = imageResponse.headers.get('content-type') || 'image/svg+xml'
        ogDesignImage = `data:${imageType};base64,${imageBase64}`
      }
    } catch (error) {
      console.error('Failed to load og-design image:', error)
    }

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            backgroundColor: '#FCF6F1',
            padding: '80px 80px 318px 80px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            position: 'relative',
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#1a1a1a',
              maxWidth: '1040px',
              letterSpacing: '-0.01em',
              display: 'flex',
              flexWrap: 'wrap',
              fontFamily: 'Cormorant Garamond',
              textAlign: 'center',
              justifyContent: 'center',
              textTransform: 'lowercase',
              width: '100%',
            }}
          >
            {title}
          </div>
          {/* Footer with date and author */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '20px',
              fontSize: 24,
              color: '#888',
              fontWeight: 400,
              fontFamily: 'system-ui, -apple-system, sans-serif',
            }}
          >
            {publishedAt && (
              <div>
                {new Date(publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </div>
            )}
            {publishedAt && <div style={{ color: '#ddd' }}>•</div>}
            <div>Sarthak Mangla</div>
          </div>

          {/* OG Design Image at bottom */}
          {ogDesignImage && (
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '1200px',
                height: '238px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={ogDesignImage}
                alt=""
                style={{
                  width: '1200px',
                  height: '238px',
                  objectFit: 'cover',
                }}
              />
            </div>
          )}
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: fonts as any,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
