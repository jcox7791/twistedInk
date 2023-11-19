import Container from '@mui/material/Container';
// CSS
import styles from '../../assets/styles/css/home.module.css';

const Home = () => {
    return (
        <>
            <Container id={styles.con1}>
                <Container id={styles.con2}>
                    <h1 className={styles.headingTitle}>Twisted Ink & Body Modifications</h1>
                </Container>
                <Container id={styles.con3}>
                    <h2 className={styles.title}>Im a tattoo image!</h2>
                </Container>
                <Container id={styles.con4}>
                    <h2 className={styles.title}>Im a running video!</h2>
                    <video>
                        <source />
                    </video>
                </Container>
                <Container id={styles.con5}>
                    <h2 className={styles.title}>Im swag with built with a re-usable card componet!</h2>
                </Container>
            </Container>
        </>
    )
}

export default Home