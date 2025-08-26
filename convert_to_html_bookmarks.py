import json
from datetime import datetime

def convert_articles_to_html_bookmarks():
    """Convert articles_array.js to HTML bookmark format (Netscape format)"""
    
    # Read the JavaScript file
    with open(r'N:\Projects\Claude\Portfolio Site\articles_array.js', 'r', encoding='utf-8') as f:
        js_content = f.read()
    
    # Extract the articles array from JavaScript
    # Remove the const declaration and trailing semicolon
    json_str = js_content.replace('const articles = ', '').rstrip(';\n')
    
    # Parse the JSON
    articles = json.loads(json_str)
    
    # Group articles by category
    categories = {}
    for article in articles:
        category = article['category']
        if category not in categories:
            categories[category] = []
        categories[category].append(article)
    
    # Convert date to Unix timestamp
    def date_to_timestamp(date_str):
        """Convert YYYY-MM-DD to Unix timestamp"""
        try:
            dt = datetime.strptime(date_str, '%Y-%m-%d')
            return str(int(dt.timestamp()))
        except:
            return str(int(datetime.now().timestamp()))
    
    # Start HTML content
    html_content = '''<!DOCTYPE NETSCAPE-Bookmark-file-1>
<!-- This is an automatically generated file.
     It will be read and overwritten.
     DO NOT EDIT! -->
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks Menu</H1>

<DL><p>
    <DT><H3 ADD_DATE="1640995200" LAST_MODIFIED="1640995200" PERSONAL_TOOLBAR_FOLDER="true">Bookmarks Toolbar</H3>
    <DL><p>
'''
    
    # Add each category as a folder
    for category_name, category_articles in sorted(categories.items()):
        # Add category folder
        html_content += f'        <DT><H3 ADD_DATE="1640995200" LAST_MODIFIED="1640995200">{category_name}</H3>\n'
        html_content += '        <DL><p>\n'
        
        # Add bookmarks in this category
        for article in sorted(category_articles, key=lambda x: x['title']):
            timestamp = date_to_timestamp(article['dateAdded'])
            # Escape HTML entities in title and URL
            title = article['title'].replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;').replace('"', '&quot;')
            url = article['url'].replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
            
            html_content += f'            <DT><A HREF="{url}" ADD_DATE="{timestamp}">{title}</A>\n'
        
        html_content += '        </DL><p>\n'
    
    # Close HTML structure
    html_content += '''    </DL><p>
</DL><p>
'''
    
    # Write the HTML bookmarks file
    with open(r'N:\Projects\Claude\Portfolio Site\bookmarks.html', 'w', encoding='utf-8') as f:
        f.write(html_content)
    
    print(f"Successfully converted {len(articles)} articles to HTML bookmark format!")
    print(f"Created {len(categories)} category folders:")
    for category, articles_list in sorted(categories.items()):
        print(f"  - {category}: {len(articles_list)} bookmarks")
    print("\nBookmarks saved to: bookmarks.html")
    print("\nTo import:")
    print("1. Open Chrome and go to chrome://bookmarks/")
    print("2. Click the three dots menu in the top right")
    print("3. Select 'Import bookmarks and settings'")
    print("4. Choose 'HTML file' as the source")
    print("5. Select the bookmarks.html file")

if __name__ == "__main__":
    convert_articles_to_html_bookmarks()