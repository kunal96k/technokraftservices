$pages = @(
    'about.html',
    'services.html',
    'service-detail.html',
    'project.html',
    'project-detail.html',
    'blog.html',
    'blog-detail.html',
    'not-found.html',
    'contact.html'
)

foreach ($page in $pages) {
    Write-Host "Downloading page: $page"
    curl.exe -s -L "https://html.themexriver.com/it-firm/$page" -o "$page"
}

Get-ChildItem *.html | Select-Object Name, Length
