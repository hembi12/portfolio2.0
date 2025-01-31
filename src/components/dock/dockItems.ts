// src/components/dock/dockItems.ts
import { HomeIcon, SmileIcon, BriefcaseIcon, GraduationCapIcon, CodeIcon, ZapIcon, MailIcon, GlobeIcon } from 'lucide-react';

type DockItemType = {
    href?: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
    onClick?: () => void;
};

export const getDockItems = (t: (key: string) => string, handleLanguageChange: () => void): DockItemType[] => [
    { href: '#header', icon: HomeIcon, label: t('home') },
    { href: '#about', icon: SmileIcon, label: t('aboutdock') },
    { href: '#projects', icon: CodeIcon, label: t('projectsdock') },
    { href: '#skills', icon: ZapIcon, label: t('skillsdock') },
    { href: '#contact', icon: MailIcon, label: t('contactdock') },
    { href: '#work-experience', icon: BriefcaseIcon, label: t('workExperience') },
    { href: '#education', icon: GraduationCapIcon, label: t('educationdock') },
    { icon: GlobeIcon, label: t('changeLanguage'), onClick: handleLanguageChange },
];