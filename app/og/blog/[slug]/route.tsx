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

    // Load Cormorant Garamond font from Google Fonts with multiple weights
    const fonts: Array<{ name: string; data: ArrayBuffer; style: 'normal' | 'italic'; weight: 400 | 600 | 700 | 800 }> = []
    try {
      // Fetch the CSS from Google Fonts API to get the font file URLs
      const cssResponse = await fetch(
        'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700;800&display=swap'
      )
      const cssText = await cssResponse.text()
      
      // Parse all @font-face blocks to extract weight and URL for each
      const fontFaceRegex = /@font-face\s*\{([^}]+)\}/g
      let match
      
      while ((match = fontFaceRegex.exec(cssText)) !== null) {
        const fontFaceContent = match[1]
        
        // Extract font weight (e.g., font-weight: 400; or font-weight:400;)
        const weightMatch = fontFaceContent.match(/font-weight\s*:\s*(\d+)/i)
        const weightValue = weightMatch ? parseInt(weightMatch[1], 10) : 400
        const weight = weightValue as 400 | 600 | 700 | 800
        
        // Extract font URL
        const urlMatch = fontFaceContent.match(/url\(([^)]+)\)/)?.[1]
        if (urlMatch) {
          const fontUrl = urlMatch.replace(/['"]/g, '')
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
        }
      }
    } catch (error) {
      console.error('Failed to load font:', error)
    }

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#FCF6F1',
            padding: '80px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.1,
              color: '#1a1a1a',
              marginBottom: summary ? '40px' : '0',
              maxWidth: '1040px',
              letterSpacing: '-0.01em',
              display: 'flex',
              flexWrap: 'wrap',
              fontFamily: 'Cormorant Garamond',
            }}
          >
            {title}
          </div>

          {/* Summary */}
          {summary && (
            <div
              style={{
                fontSize: 32,
                lineHeight: 1.6,
                color: '#555',
                maxWidth: '1000px',
                marginBottom: 'auto',
                fontWeight: 400,
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              {summary.length > 150 ? `${summary.substring(0, 150)}...` : summary}
            </div>
          )}

          {/* Footer with date and author */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginTop: 'auto',
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
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: fonts,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
