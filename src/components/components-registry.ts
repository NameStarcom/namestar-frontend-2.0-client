import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

/**
 * The getComponent() function loads a component using dynamic import.
 *
 * Dynamic imports are useful when you wish to load a module conditionally. For example, if a home page renders the
 * "HeroSection" conditionally, then loading it with getComponent('HeroSection') will ensure that the "HeroSection"
 * is bundled only when used.
 */
export function getComponent(key: string): ComponentType {
    return components[key];
}

/**
 * Map of dynamically imported components.
 *
 * The mapping key of a dynamically imported component is the model name describing the props of that component.
 * And the value is the component imported via Next.js dynamic import. You should use dynamic components for large
 * components or components with heavy external dependencies that are used sparingly in your website's pages.
 * To learn more about Nextjs dynamic imports visit:
 * https://nextjs.org/docs/advanced-features/dynamic-import
 *
 * Dynamic components can be selected at run-time based on the type of their content (props). This is because
 * components are mapped by models that describe their content, and content's type always matches the model name.
 * For example, a page component can call `getComponent(section.type)` function, passing it the type of section
 * data it needs to render, and get back the component that can render that type of data:
 *
 *     const Section = getComponent(section.type);
 *     return <Section {...section} />;
 */
const components = {
    CheckboxFormControl: dynamic(() => import('./molecules/FormBlock/CheckboxFormControl')),
    ContactSection: dynamic(() => import('./sections/ContactSection')),
    EmailFormControl: dynamic(() => import('./molecules/FormBlock/EmailFormControl')),
    FaqSection: dynamic(() => import('./sections/FaqSection')),
    FormBlock: dynamic(() => import('./molecules/FormBlock')),
    HeroSection: dynamic(() => import('./sections/HeroSection')),
    ImageBlock: dynamic(() => import('./molecules/ImageBlock')),
    SelectFormControl: dynamic(() => import('./molecules/FormBlock/SelectFormControl')),
    TextareaFormControl: dynamic(() => import('./molecules/FormBlock/TextareaFormControl')),
    TextFormControl: dynamic(() => import('./molecules/FormBlock/TextFormControl')),
    TextSection: dynamic(() => import('./sections/TextSection')),
    VideoBlock: dynamic(() => import('./molecules/VideoBlock')),
    PageLayout: dynamic(() => import('./layouts/PageLayout')),
    DomainLayout: dynamic(() => import('./layouts/DomainLayout')),
    DomainsSection: dynamic(() => import('./sections/DomainsSection')),
    CategorySection: dynamic(() => import('./sections/CategorySection')),
    SearchSection: dynamic(() => import('./sections/SearchSection/Search')),
    ContentSection: dynamic(() => import('./sections/ContentSection')),
    ListSection: dynamic(() => import('./sections/ListSection')),
    PostLayout: dynamic(() => import('./layouts/PostLayout')),
    PostFeedLayout: dynamic(() => import('./layouts/PostFeedLayout')),
    PostFeedCategoryLayout: dynamic(() => import('./layouts/PostFeedCategoryLayout')),
    WhatsNextSection: dynamic(() => import('./sections/WhatsNextSection')),
    LandingSection: dynamic(() => import('./sections/LandingSection')),
    DetailSection: dynamic(() => import('./sections/DetailSection'))
};
