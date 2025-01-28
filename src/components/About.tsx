import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="my-8 px-4 max-w-3xl mx-auto">
            <h2 className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 bg-clip-text text-transparent font-extrabold text-4xl sm:text-4xl lg:text-5xl font-semibold text-center md:text-left">
                {t('about.title')}
            </h2>
            <p className="text-gray-200 mt-4 text-md sm:text-base lg:text-lg leading-relaxed text-center md:text-left">
                {t('about.description.part1')} <span className="text-cyan-200">{t('about.highlights.newCareer')}</span>{' '}
                {t('about.description.part2')} <span className="text-cyan-200">{t('about.highlights.creativity')}</span>{' '}
                {t('about.description.part3')} <span className="text-cyan-200">{t('about.highlights.newProject')}</span>{' '}
                {t('about.description.part4')} <span className="text-cyan-200">{t('about.highlights.deployed')}</span>{' '}
                {t('about.description.part5')} <span className="block h-4"></span>
                {t('about.description.part6')} <span className="text-cyan-200">{t('about.highlights.growth')}</span>{' '}
                {t('about.description.part7')} <span className="text-cyan-200">{t('about.highlights.motivation')}</span>{' '}
                {t('about.description.part8')} <span className="text-cyan-200">{t('about.highlights.improvement')}</span>{' '}
                {t('about.description.part9')}
            </p>
        </section>
    );
};

export default About;
