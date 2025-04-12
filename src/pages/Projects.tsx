
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { projects } from '@/data/projects';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="section-container">
      <h1 className="section-title">{t('projects.title')}</h1>
      <p className="section-subtitle">{t('projects.subtitle')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="project-card flex flex-col h-full">
            <CardHeader className="pb-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-md mb-4">
                <img 
                  src={project.imageUrl} 
                  alt={project.title[language]} 
                  className="object-cover w-full h-full"
                />
              </div>
              <CardTitle className="text-xl">{project.title[language]}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground mb-4">{project.description[language]}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between pt-4">
              <Button variant="outline" size="sm" asChild>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={16} className="mr-2" />
                  Code
                </a>
              </Button>
              <Button size="sm" asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} className="mr-2" />
                  Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
