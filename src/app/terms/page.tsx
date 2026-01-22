import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsOfUse() {
    return (
        <main className="min-h-screen font-sans bg-white">
            <Navbar />
            <section className="pt-32 pb-20 container mx-auto px-4 md:px-6 max-w-4xl">
                <h1 className="font-serif text-4xl font-bold mb-8">Terms of Use</h1>
                <div className="prose-nyt text-tw-body max-w-none">
                    <p className="font-medium text-gray-900">Last updated: January 2026</p>

                    <p>Welcome to NexusIT. These Terms of Use (“Terms”) govern your access to and use of the NexusIT website, content, and related services (collectively, the “Site”). By accessing, browsing, or using our Site, you acknowledge that you have read, understood, and agree to be bound by these Terms and all applicable laws and regulations.</p>
                    <p>If you do not agree with these Terms, you must not access or use the Site.</p>

                    <h2>1. Acceptance of Terms</h2>
                    <p>By using this Site, you represent that you are at least the age of majority in your jurisdiction and have the legal capacity to enter into a binding agreement. If you are accessing the Site on behalf of an organization, you represent that you are authorized to bind that organization to these Terms.</p>

                    <h2>2. Changes to These Terms</h2>
                    <p>NexusIT reserves the right to modify, update, or replace these Terms at any time at its sole discretion. Any changes will be effective immediately upon posting on this page, with an updated “Last updated” date. Your continued use of the Site after any changes constitutes acceptance of the revised Terms.</p>

                    <h2>3. Use of the Site</h2>
                    <h3>3.1 Permitted Use</h3>
                    <p>You may use the Site solely for lawful purposes and in accordance with these Terms. The Site is intended to provide information about NexusIT, its services, insights, and related content.</p>

                    <h3>3.2 Prohibited Use</h3>
                    <p>You agree not to use the Site:</p>
                    <ul>
                        <li>In any way that violates applicable laws or regulations</li>
                        <li>For fraudulent, deceptive, or harmful purposes</li>
                        <li>To infringe upon the intellectual property or rights of others</li>
                        <li>To transmit or upload malicious code, viruses, or harmful data</li>
                        <li>To attempt unauthorized access to systems, servers, or networks</li>
                        <li>In any manner that could damage, disable, overburden, or impair the Site</li>
                    </ul>
                    <p>We reserve the right to restrict or terminate access to the Site if we believe you are violating these Terms.</p>

                    <h2>4. Intellectual Property Rights</h2>
                    <p>All content on this Site, including but not limited to text, graphics, logos, images, videos, software, and design elements, is the property of NexusIT or its licensors and is protected by applicable intellectual property laws.</p>
                    <p>You may not copy, reproduce, modify, distribute, publish, or create derivative works from any content on this Site without prior written consent from NexusIT, except as expressly permitted by law.</p>

                    <h2>5. User Submissions</h2>
                    <p>If you submit information or materials to us (including contact forms, resumes, inquiries, or feedback), you:</p>
                    <ul>
                        <li>Represent that the information is accurate and lawful</li>
                        <li>Grant NexusIT a non-exclusive, royalty-free right to use such information for business purposes</li>
                        <li>Acknowledge that submissions are not confidential unless explicitly stated otherwise</li>
                    </ul>
                    <p>We are not responsible for any loss or damage arising from user-submitted content.</p>

                    <h2>6. Third-Party Links and Services</h2>
                    <p>The Site may contain links to third-party websites or services for your convenience. NexusIT does not control, endorse, or assume responsibility for any third-party content, products, or services.</p>
                    <p>Accessing third-party links is at your own risk, and you should review their respective terms and policies.</p>

                    <h2>7. Disclaimers</h2>
                    <p>The Site and all content provided are offered on an “as is” and “as available” basis. NexusIT makes no warranties, express or implied, regarding:</p>
                    <ul>
                        <li>Accuracy, completeness, or reliability of content</li>
                        <li>Availability or uninterrupted access to the Site</li>
                        <li>Suitability of information for any particular purpose</li>
                    </ul>
                    <p>To the fullest extent permitted by law, NexusIT disclaims all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

                    <h2>8. Limitation of Liability</h2>
                    <p>To the maximum extent permitted by law, NexusIT and its directors, employees, partners, and affiliates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or related to:</p>
                    <ul>
                        <li>Your use or inability to use the Site</li>
                        <li>Errors, omissions, or inaccuracies in content</li>
                        <li>Unauthorized access to or use of our systems</li>
                        <li>Any third-party links or services</li>
                    </ul>
                    <p>Your sole remedy for dissatisfaction with the Site is to stop using it.</p>

                    <h2>9. Indemnification</h2>
                    <p>You agree to indemnify, defend, and hold harmless NexusIT and its affiliates from any claims, damages, losses, liabilities, and expenses arising out of:</p>
                    <ul>
                        <li>Your use of the Site</li>
                        <li>Your violation of these Terms</li>
                        <li>Your infringement of any third-party rights</li>
                    </ul>

                    <h2>10. Privacy</h2>
                    <p>Your use of the Site is also governed by our <a href="/privacy" className="hover:text-tw-crimson transition-colors">Privacy Policy</a>, which describes how we collect, use, and protect personal information. By using the Site, you consent to our data practices as described in the Privacy Policy.</p>

                    <h2>11. Termination</h2>
                    <p>NexusIT reserves the right to suspend or terminate your access to the Site at any time, without notice, for conduct that we believe violates these Terms or is otherwise harmful to NexusIT or other users.</p>

                    <h2>12. Governing Law and Jurisdiction</h2>
                    <p>These Terms shall be governed by and construed in accordance with the laws of the applicable jurisdiction where NexusIT operates, without regard to conflict of law principles. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.</p>

                    <h2>13. Severability</h2>
                    <p>If any provision of these Terms is found to be unlawful, invalid, or unenforceable, the remaining provisions shall remain in full force and effect.</p>

                    <h2>14. Entire Agreement</h2>
                    <p>These Terms constitute the entire agreement between you and NexusIT regarding your use of the Site and supersede any prior agreements or understandings.</p>

                    <h2>15. Contact Information</h2>
                    <p>If you have any questions or concerns regarding these Terms of Use, please contact us at:</p>
                    <p><strong>NexusIT</strong><br />
                        Email: <a href="mailto:info@nexusit.com" className="hover:text-tw-crimson transition-colors">info@nexusit.com</a></p>
                </div>
            </section>
            <Footer />
        </main>
    );
}
