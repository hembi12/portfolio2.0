import { HomeIcon, SmileIcon, BriefcaseIcon, GraduationCapIcon, CodeIcon, ZapIcon, MailIcon, GlobeIcon } from 'lucide-react';

type DockItemType = {
    href?: string; // Para enlaces externos
    sectionId?: string; // ✅ Nuevo: Para scroll interno con react-scroll
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
    onClick?: () => void;
    ariaLabel?: string;
};

export const getDockItems = (t: (key: string) => string, handleLanguageChange: () => void): DockItemType[] => [
    { sectionId: 'header', icon: HomeIcon, label: String(t('home')) },
    { sectionId: 'about', icon: SmileIcon, label: String(t('aboutdock')) },
    { sectionId: 'projects', icon: CodeIcon, label: String(t('projectsdock')) },
    { sectionId: 'skills', icon: ZapIcon, label: String(t('skillsdock')) },
    { sectionId: 'contact', icon: MailIcon, label: String(t('contactdock')) },
    { sectionId: 'work-experience', icon: BriefcaseIcon, label: String(t('workExperience')) },
    { sectionId: 'education', icon: GraduationCapIcon, label: String(t('educationdock')) },
    { 
        icon: GlobeIcon, 
        label: String(t('changeLanguage')), 
        onClick: handleLanguageChange 
    },
];
