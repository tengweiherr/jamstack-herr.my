import Loading from "@/components/Molecules/Loading"
import { fetchAllStories } from "@/utils/api/medium"
import { PageSubtitle, PageTitle, Section, TextContainer } from "@/utils/styled/common.styled"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const TechblogCardList = dynamic(() => import('../../components/Molecules/TechblogCardList'), {
    loading: () => <Loading />,
})

const Techblog = () => {

    const [mediumRes, setMediumRes] = useState<string>()

    useEffect(()=>{
        fetchAllStories().then(res => setMediumRes(res)).catch(err => console.log(err))
    },[])
    
    return (
        <Section className='py-5'>
            <TextContainer className='px-3'>
                <PageTitle>My tech blog</PageTitle>
                <PageSubtitle>Where I document what I&apos;ve learn and share them to others.</PageSubtitle>
            </TextContainer>
            <TechblogCardList mediumRSSResInString={mediumRes} />
        </Section>
    )
}

export default Techblog