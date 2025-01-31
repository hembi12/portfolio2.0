import { HomeIcon, SmileIcon, BriefcaseIcon, GraduationCapIcon, CodeIcon, ZapIcon, MailIcon, GlobeIcon } from 'lucide-react';

type DockItemType = {
    href?: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
    onClick?: () => void;
    ariaLabel?: string;
};

export const getDockItems = (t: (key: string) => string, handleLanguageChange: () => void): DockItemType[] => [
    { href: '#header', icon: HomeIcon, label: String(t('home')) },
    { href: '#about', icon: SmileIcon, label: String(t('aboutdock')) },
    { href: '#projects', icon: CodeIcon, label: String(t('projectsdock')) },
    { href: '#skills', icon: ZapIcon, label: String(t('skillsdock')) },
    { href: '#contact', icon: MailIcon, label: String(t('contactdock')) },
    { href: '#work-experience', icon: BriefcaseIcon, label: String(t('workExperience')) },
    { href: '#education', icon: GraduationCapIcon, label: String(t('educationdock')) },
    { 
        icon: GlobeIcon, 
        label: String(t('changeLanguage')), 
        onClick: handleLanguageChange 
    },
];