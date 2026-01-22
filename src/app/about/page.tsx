
import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about NexusIT, our history, leadership team, and our commitment to delivering extraordinary impact through technology and social responsibility.',
};

export default function About() {
    return <AboutClient />;
}
