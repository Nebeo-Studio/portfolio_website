
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  const [isImprintOpen, setIsImprintOpen] = useState(false);

  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">
            © {year} John Doe. {t('footer.rights')}.{' '}
            <button 
              onClick={() => setIsImprintOpen(true)}
              className="underline hover:text-foreground transition-colors"
            >
              {t('footer.imprint')}
            </button>
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>

      {/* Imprint Dialog */}
      <Dialog open={isImprintOpen} onOpenChange={setIsImprintOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{t('footer.imprint')}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm">
            <p><strong>{t('imprint.company')}:</strong> John Doe Portfolio</p>
            <p><strong>{t('imprint.address')}:</strong> 123 Main Street, City, Country</p>
            <p><strong>{t('imprint.email')}:</strong> contact@johndoe.com</p>
            <p><strong>{t('imprint.phone')}:</strong> +1 234 567 890</p>
            <p><strong>{t('imprint.taxId')}:</strong> TAX12345678</p>
            <p className="text-xs text-muted-foreground pt-4">{t('imprint.disclaimer')}</p>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
