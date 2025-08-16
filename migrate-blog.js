import { BLOG_POSTS } from './src/utils/constants.js';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

// Ensure content/blog directory exists
const contentDir = './src/content/blog';
try {
  mkdirSync(contentDir, { recursive: true });
  console.log('✅ Created content/blog directory');
} catch (error) {
  console.log('📁 Content directory already exists');
}

// Function to convert HTML to markdown (basic conversion)
function htmlToMarkdown(html) {
  return html
    // Convert headers
    .replace(/<h2>/g, '\n## ')
    .replace(/<\/h2>/g, '\n')
    .replace(/<h3>/g, '\n### ')
    .replace(/<\/h3>/g, '\n')
    .replace(/<h4>/g, '\n#### ')
    .replace(/<\/h4>/g, '\n')
    
    // Convert paragraphs
    .replace(/<p>/g, '\n')
    .replace(/<\/p>/g, '\n')
    
    // Convert lists
    .replace(/<ul>/g, '\n')
    .replace(/<\/ul>/g, '\n')
    .replace(/<ol>/g, '\n')
    .replace(/<\/ol>/g, '\n')
    .replace(/<li>/g, '- ')
    .replace(/<\/li>/g, '\n')
    
    // Convert emphasis
    .replace(/<strong>/g, '**')
    .replace(/<\/strong>/g, '**')
    .replace(/<em>/g, '*')
    .replace(/<\/em>/g, '*')
    
    // Convert tables (basic)
    .replace(/<table>/g, '\n')
    .replace(/<\/table>/g, '\n')
    .replace(/<tr>/g, '')
    .replace(/<\/tr>/g, '\n')
    .replace(/<th>/g, '| ')
    .replace(/<\/th>/g, ' ')
    .replace(/<td>/g, '| ')
    .replace(/<\/td>/g, ' ')
    
    // Clean up extra whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .trim();
}

// Convert each blog post to markdown file
BLOG_POSTS.forEach(post => {
  const frontmatter = `---
title: "${post.title.replace(/"/g, '\\"')}"
description: "${post.excerpt.replace(/"/g, '\\"')}"
pubDate: ${post.publishDate}
category: "${post.category}"
tags: [${post.tags.map(tag => `"${tag}"`).join(', ')}]
image: "${post.image}"
readTime: "${post.readTime}"
author: "${post.author}"
draft: false
---

`;

  // Convert HTML content to markdown
  const markdownContent = htmlToMarkdown(post.content);
  
  // Combine frontmatter and content
  const fullContent = frontmatter + markdownContent;
  
  // Write to file
  const filename = `${contentDir}/${post.slug}.md`;
  
  try {
    writeFileSync(filename, fullContent, 'utf8');
    console.log(`✅ Created: ${post.slug}.md`);
  } catch (error) {
    console.error(`❌ Failed to create ${post.slug}.md:`, error.message);
  }
});

console.log('\n🎉 Migration completed! Blog posts have been converted to Content Collections.');
console.log('\n📝 Next steps:');
console.log('1. Check the generated markdown files in src/content/blog/');
console.log('2. Update your blog pages to use Content Collections API');
console.log('3. Test the blog functionality');
console.log('4. Once confirmed working, you can remove BLOG_POSTS from constants.js');