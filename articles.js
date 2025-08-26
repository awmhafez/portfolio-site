// Articles data - Complete dataset from processed CSV
const articlesData = {
    articles: [
{
    "title": "Semantic Versioning 2.0.0",
    "author": "Semantic Versioning",
    "url": "https://semver.org/",
    "description": "Programming article about semantic versioning 2.0.0",
    "category": "Programming",
    "dateAdded": "2020-02-20",
    "status": "completed"
},
{
    "title": "Amazon Recommendations Research Paper",
    "author": "UMD",
    "url": "http://cs.umd.edu/~samir/498/Amazon-Recommendations.pdf",
    "description": "Machine learning resource on recommendation systems",
    "category": "Machine Learning",
    "dateAdded": "2020-02-20",
    "status": "reading"
}
// ... rest of articles data would go here
    ]
};

// Export for use in main script
window.articlesData = articlesData;