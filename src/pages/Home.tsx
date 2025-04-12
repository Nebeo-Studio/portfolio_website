
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-[calc(100vh-8rem)]">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
            <span className="text-muted-foreground">{t('home.greeting')} </span>
            <span className="text-primary">{t('home.name')}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('home.title')}</h2>
          <p className="text-xl text-muted-foreground mb-8">
            {t('home.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">
                {t('home.cta')}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">
                {t('nav.projects')}
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
