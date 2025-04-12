
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts, BlogPost } from '@/data/blogPosts';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.slug === slug);
    if (!foundPost) {
      navigate('/blog');
      return;
    }
    setPost(foundPost);
  }, [slug, navigate]);

  if (!post) {
    return (
      <div className="section-container flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="section-container">
      <Button 
        variant="ghost" 
        onClick={() => navigate('/blog')} 
        className="mb-6"
      >
        <ChevronLeft size={16} className="mr-2" />
        Back to Blog
      </Button>
      
      <div className="max-w-4xl mx-auto">
        <Card>
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-t-lg">
            <img 
              src={post.imageUrl} 
              alt={post.title[language]} 
              className="object-cover w-full h-full"
            />
          </div>
          
          <CardContent className="pt-8 pb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title[language]}
            </h1>
            
            <p className="text-muted-foreground mb-8">
              {new Date(post.date).toLocaleDateString(language, { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>{post.content[language]}</p>
              
              {/* This would be where the full blog content goes */}
              <p className="mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogPostPage;
