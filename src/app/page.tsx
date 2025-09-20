import Header from "../../components/header";
import Container from "../../components/container";
import PageWrapper from "../../components/pageWrapper";
import Main from "../../components/main";

export default function Home(){
    return (
        <>
            <PageWrapper>
               <Container>
                    <Header/>
                    <Main/>
               </Container>
            </PageWrapper>
        </>
        )
}