
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/blogPosts';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatDistance } from 'date-fns';

const Blog: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="section-container">
      <h1 className="section-title">{t('blog.title')}</h1>
      <p className="section-subtitle">{t('blog.subtitle')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => {
          const postDate = new Date(post.date);
          const timeAgo = formatDistance(
            new Date(post.date),
            new Date(),
            { addSuffix: true }
          );
          
          return (
            <Card key={post.id} className="blog-card flex flex-col h-full">
              <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
                <img 
                  src={post.imageUrl} 
                  alt={post.title[language]} 
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold line-clamp-2">
                  {post.title[language]}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {postDate.toLocaleDateString(language, { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })} 
                  {" · "} 
                  {timeAgo}
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt[language]}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="w-full">
                  <Link to={`/blog/${post.slug}`}>
                    {t('blog.readMore')}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
