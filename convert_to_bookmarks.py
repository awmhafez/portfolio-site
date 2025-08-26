import json
import re
from datetime import datetime

def convert_articles_to_chrome_bookmarks():
    """Convert articles_array.js to Chrome bookmark format"""
    
    # Read the JavaScript file
    with open(r'N:\Projects\Claude\Portfolio Site\articles_array.js', 'r', encoding='utf-8') as f:
        js_content = f.read()
    
    # Extract the articles array from JavaScript
    # Remove the const declaration and trailing semicolon
    json_str = js_content.replace('const articles = ', '').rstrip(';\n')
    
    # Parse the JSON
    articles = json.loads(json_str)
    
    # Create bookmark structure
    bookmark_structure = {
        "checksum": "a1b2c3d4e5f6g7h8",
        "roots": {
            "bookmark_bar": {
                "children": [],
                "date_added": "13000000000000000",
                "date_modified": "0",
                "guid": "00000000-1111-2222-3333-444444444444",
                "id": "1",
                "name": "Bookmarks bar",
                "type": "folder"
            },
            "other": {
                "children": [],
                "date_added": "13000000000000000",
                "date_modified": "0", 
                "guid": "00000000-5555-6666-7777-888888888888",
                "id": "2",
                "name": "Other bookmarks",
                "type": "folder"
            },
            "synced": {
                "children": [],
                "date_added": "13000000000000000",
                "date_modified": "0",
                "guid": "00000000-9999-aaaa-bbbb-cccccccccccc",
                "id": "3", 
                "name": "Mobile bookmarks",
                "type": "folder"
            }
        },
        "version": 1
    }
    
    # Group articles by category
    categories = {}
    for article in articles:
        category = article['category']
        if category not in categories:
            categories[category] = []
        categories[category].append(article)
    
    # Convert date to Chrome timestamp (microseconds since Windows epoch)
    def date_to_chrome_timestamp(date_str):
        """Convert YYYY-MM-DD to Chrome timestamp"""
        try:
            dt = datetime.strptime(date_str, '%Y-%m-%d')
            # Chrome uses Windows epoch (1601-01-01) in microseconds
            # Unix epoch is 1970-01-01, difference is 11644473600 seconds
            unix_timestamp = dt.timestamp()
            chrome_timestamp = int((unix_timestamp + 11644473600) * 1000000)
            return str(chrome_timestamp)
        except:
            return "13000000000000000"  # Default timestamp
    
    # Create category folders
    folder_id = 100
    bookmark_id = 1000
    
    for category_name, category_articles in categories.items():
        folder_id += 1
        
        # Create folder for category
        category_folder = {
            "children": [],
            "date_added": "13000000000000000",
            "date_modified": "13000000000000000",
            "guid": f"category-{folder_id:08d}-{folder_id:04d}-{folder_id:04d}-{folder_id:04d}-{folder_id:012d}",
            "id": str(folder_id),
            "name": category_name,
            "type": "folder"
        }
        
        # Add bookmarks to category folder
        for article in category_articles:
            bookmark_id += 1
            
            bookmark = {
                "date_added": date_to_chrome_timestamp(article['dateAdded']),
                "guid": f"bookmark-{bookmark_id:08d}-{bookmark_id:04d}-{bookmark_id:04d}-{bookmark_id:04d}-{bookmark_id:012d}",
                "id": str(bookmark_id),
                "name": article['title'],
                "type": "url",
                "url": article['url']
            }
            
            category_folder["children"].append(bookmark)
        
        # Add category folder to bookmark bar
        bookmark_structure["roots"]["bookmark_bar"]["children"].append(category_folder)
    
    # Write the Chrome bookmarks file
    with open(r'N:\Projects\Claude\Portfolio Site\chrome_bookmarks.json', 'w', encoding='utf-8') as f:
        json.dump(bookmark_structure, f, indent=2, ensure_ascii=False)
    
    print(f"Successfully converted {len(articles)} articles to Chrome bookmark format!")
    print(f"Created {len(categories)} category folders:")
    for category, articles_list in categories.items():
        print(f"  - {category}: {len(articles_list)} bookmarks")
    print("\nBookmarks saved to: chrome_bookmarks.json")
    print("\nTo import:")
    print("1. Open Chrome and go to chrome://bookmarks/")
    print("2. Click the three dots menu (⋮) in the top right")
    print("3. Select 'Import bookmarks'")
    print("4. Choose the chrome_bookmarks.json file")

if __name__ == "__main__":
    convert_articles_to_chrome_bookmarks()