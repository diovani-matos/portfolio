import styles from './Footer.module.css'

function Footer(){

    return(

        <footer className={styles.footer}>
            <span>Copyright &copy;<a href="https://www.instagram.com/diovanimatos/" target='_black'> Diovani Matos</a>. Todos os direitos reservados!</span>
        </footer>

    )
}

export default Footer