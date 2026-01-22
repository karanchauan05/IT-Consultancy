import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();

        const firstName = formData.get('firstName') as string;
        const lastName = formData.get('lastName') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;
        const jobTitle = formData.get('jobTitle') as string;
        const coverLetter = formData.get('coverLetter') as string;
        const resume = formData.get('resume') as File;

        // --- Server-side Validation ---
        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { success: false, message: 'Invalid email address provided.' },
                { status: 400 }
            );
        }

        if (!firstName || !lastName || !phone || !resume) {
            return NextResponse.json(
                { success: false, message: 'Missing required fields or resume file.' },
                { status: 400 }
            );
        }

        // --- Logging / Simulated Database Save ---
        console.log('--- REAL JOB APPLICATION RECEIVED ---');
        console.log(`Timestamp: ${new Date().toISOString()}`);
        console.log(`Job Applied For: ${jobTitle}`);
        console.log(`Applicant: ${firstName} ${lastName}`);
        console.log(`Contact: ${email} | ${phone}`);
        console.log(`Resume Received: ${resume.name} (${(resume.size / 1024).toFixed(2)} KB)`);
        console.log(`Cover Letter length: ${coverLetter?.length || 0} chars`);
        console.log('--------------------------------------');

        // Simulate processing/upload time
        await new Promise(resolve => setTimeout(resolve, 1500));

        return NextResponse.json({
            success: true,
            message: 'Your application has been successfully received and logged.'
        });

    } catch (error) {
        console.error('CRITICAL: Application submission failed:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error while processing application.' },
            { status: 500 }
        );
    }
}
