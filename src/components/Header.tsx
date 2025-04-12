import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, LanguageCode, LANGUAGES } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { Globe, Menu, X, ChevronUp, ChevronDown, Home, User, Briefcase, FileText, Mail } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
const NON_LATIN_LANGUAGES = ['ja', 'zh', 'ru'];
const ENGLISH_NAMES = {
  'ja': 'Japanese',
  'zh': 'Chinese',
  'ru': 'Russian',
  'hi': 'Hindi',
  'de': 'German',
  'fr': 'French',
  'es': 'Spanish',
  'it': 'Italian',
  'pt_BR': 'Portuguese (Brazil)',
  'nl': 'Dutch',
  'sv': 'Swedish',
  'da': 'Danish',
  'fi': 'Finnish',
  'nb': 'Norwegian',
  'pl': 'Polish',
  'cs': 'Czech',
  'sk': 'Slovak',
  'hu': 'Hungarian',
  'ro': 'Romanian',
  'hr': 'Croatian',
  'lt': 'Lithuanian',
  'tr': 'Turkish',
  'vi': 'Vietnamese',
  'id': 'Indonesian',
  'fil': 'Filipino',
  'en': 'English'
};

// ISO layout codes (2-letter codes mostly matching language codes)
const ISO_CODES = {
  'en': 'en-US',
  'de': 'de-DE',
  'fr': 'fr-FR',
  'es': 'es-ES',
  'it': 'it-IT',
  'pt_BR': 'pt-BR',
  'nl': 'nl-NL',
  'sv': 'sv-SE',
  'da': 'da-DK',
  'fi': 'fi-FI',
  'nb': 'nb-NO',
  'pl': 'pl-PL',
  'cs': 'cs-CZ',
  'sk': 'sk-SK',
  'hu': 'hu-HU',
  'ro': 'ro-RO',
  'hr': 'hr-HR',
  'lt': 'lt-LT',
  'tr': 'tr-TR',
  'vi': 'vi-VN',
  'id': 'id-ID',
  'fil': 'fil-PH',
  'zh': 'zh-CN',
  'hi': 'hi-IN',
  'ja': 'ja-JP',
  'ru': 'ru-RU'
};
const Header: React.FC = () => {
  const {
    language,
    setLanguage,
    t
  } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const formatLanguageDisplay = (code: string, name: string) => {
    if (code === 'en') {
      return name;
    }
    return <div className="flex items-center">
        <span>{name}</span>
        <span className="text-[#555555] dark:text-[#999999] text-xs ml-1">
          ({ENGLISH_NAMES[code as keyof typeof ENGLISH_NAMES]})
        </span>
      </div>;
  };
  const navItems = [{
    path: '/',
    label: t('nav.home'),
    icon: Home,
    id: 'startseite'
  }, {
    path: '/about',
    label: t('nav.about'),
    icon: User,
    id: 'ueber-mich'
  }, {
    path: '/projects',
    label: t('nav.projects'),
    icon: Briefcase,
    id: 'projekte'
  }, {
    path: '/blog',
    label: t('nav.blog'),
    icon: FileText,
    id: 'blog'
  }, {
    path: '/contact',
    label: t('nav.contact'),
    icon: Mail,
    id: 'kontakt'
  }];
  const isActive = (path: string) => location.pathname === path;
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            Portfolio
          </Link>
          
          <nav className="hidden md:flex items-center ml-6">
            <div className="flex rounded-full bg-muted/50 p-1">
              {navItems.map(item => <Link key={item.path} to={item.path} className={`px-4 py-2 text-sm font-medium transition-colors
                    ${isActive(item.path) ? 'bg-background text-foreground rounded-full shadow-sm' : 'text-muted-foreground hover:text-foreground'}
                  `}>
                  {item.label}
                </Link>)}
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 w-10" title={t('language.select')}>
                <Globe size={20} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 p-0 bg-popover" sideOffset={5}>
              <div className="py-1.5 px-2 flex items-center justify-between text-xs font-medium text-muted-foreground border-b">
                <span>{t('language.select')}</span>
                <div className="flex">
                  <ChevronUp size={14} className="mr-1" />
                  <ChevronDown size={14} />
                </div>
              </div>
              <ScrollArea className="h-[calc(7*2.5rem)]" scrollHideDelay={0}>
                <div className="py-1">
                  {Object.entries(LANGUAGES).map(([code, name]) => <DropdownMenuItem key={code} onClick={() => {
                  setLanguage(code as LanguageCode);
                  setIsDropdownOpen(false);
                }} className={`${language === code ? 'bg-accent text-accent-foreground' : ''} py-3 px-3 h-10 cursor-pointer`}>
                      {formatLanguageDisplay(code, name)}
                    </DropdownMenuItem>)}
                </div>
              </ScrollArea>
            </DropdownMenuContent>
          </DropdownMenu>

          {isMobile && <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:max-w-sm px-0 pt-0 border-l-primary bg-[#1A1F2C] shadow-2xl">
                <div className="h-full flex flex-col">
                  <SheetHeader className="px-4 py-6 border-b border-white/10">
                    <SheetTitle className="text-left text-white flex items-center justify-between">
                      {t('nav.menu')}
                      <button onClick={() => setIsMenuOpen(false)} className="text-white/70 hover:text-white transition-colors">
                        <X size={24} />
                      </button>
                    </SheetTitle>
                  </SheetHeader>
                  
                  <nav className="flex flex-col overflow-y-auto flex-1 my-0">
                    {navItems.map((item, index) => <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)} data-id={item.id} className={`flex items-center py-4 px-6 hover:bg-primary/10 transition-colors text-white/90 hover:text-white border-l-4 border-transparent
                          ${isActive(item.path) ? 'bg-primary/10 border-l-4 border-primary text-white' : 'hover:border-primary/50'}
                        `}>
                        <span className="mr-4 text-primary">
                          <item.icon size={20} strokeWidth={1.5} />
                        </span>
                        <span className="text-base font-medium">{item.label}</span>
                      </Link>)}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>}
        </div>
      </div>
    </header>;
};
export default Header;