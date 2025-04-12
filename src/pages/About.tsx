
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  const skills = [
    "HTML & CSS", "JavaScript", "TypeScript", "React", "Vue", "Node.js",
    "Express", "MongoDB", "PostgreSQL", "GraphQL", "AWS", "Docker",
    "Tailwind CSS", "Figma", "Git"
  ];

  return (
    <div className="section-container">
      <h1 className="section-title">{t('about.title')}</h1>
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardContent className="pt-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-lg mb-6">{t('about.description')}</p>
              
              <h2 className="text-2xl font-bold mt-8 mb-4">{t('about.skills')}</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1.5">
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div>
                  <h3 className="text-xl font-bold mb-3">Work Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Senior Frontend Developer</h4>
                      <p className="text-sm text-muted-foreground">TechCorp Inc. (2022 - Present)</p>
                    </div>
                    <div>
                      <h4 className="font-medium">JavaScript Developer</h4>
                      <p className="text-sm text-muted-foreground">WebSolutions LLC (2019 - 2022)</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Master's in Computer Science</h4>
                      <p className="text-sm text-muted-foreground">Tech University (2017 - 2019)</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Bachelor's in Software Engineering</h4>
                      <p className="text-sm text-muted-foreground">State University (2013 - 2017)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
