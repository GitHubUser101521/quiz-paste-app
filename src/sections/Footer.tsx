
type FooterDetailProp = {
    title: string,
    content: string[]
}

function FooterDetail({ title, content }: FooterDetailProp) {
    return (
        <div className='flex flex-col gap-4'>
            <p className='font-bold text-lg'>{ title }</p>

            <div className='flex flex-col gap-2'>
            {
                content.map(c => (
                    <p className='opacity-70' key={c}>{ c }</p>
                ))
            }
            </div>
        </div>
    )
}

function Footer() {
    const details: FooterDetailProp[] = [
        {
            title: 'Paste',
            content: [
                'Try for free',
                'Get on Setapp',
                'Use cases',
                'Updates',
                'Pricing'
            ]
        },
        {
            title: 'Resources',
            content: [
                'Help & support',
                'Blog',
                'Terms of use',
                'Privacy policy',
            ]
        },
        {
            title: 'More',
            content: [
                'About',
                'Contact',
                'Beta program',
                'Suggest a feature',
            ]
        }
    ]

    return (
        <div className='bg-custom-black px-70 py-10 text-white'>
            <div className='flex justify-between mb-8'>
                <div>
                    <img src="/paste-app-icon.png" className="grayscale w-10" />
                </div>

                <div className='flex justify-between gap-28'>
                {
                    details.map(d => (
                        <FooterDetail {...d} key={d.title}/>
                    ))
                }
                </div>

                <div>
                    <p className='font-bold text-lg mb-4'>Follow Us</p>
                    
                    <div className='flex opacity-85'>
                        <img src="/twitter-icon.svg" alt="Twitter" />
                        <img src="/facebook-icon.svg" alt="Facebook" />
                    </div>
                </div>
            </div>

            <hr className='opacity-30'/>

            <div className='flex justify-between opacity-80 mt-8 text-sm'>
                <p>© 2025 Paste Team ApS. All rights reserved.</p>
                <p>All trademarks are the property of their respective owners.</p>
            </div>
        </div>
    )
}

export default Footer
