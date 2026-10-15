import './Footer.css'

function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer className='site-footer'>
        <p>
            &copy;{year} Arpita. Built with React
        </p>
        </footer>
    )
}

export default Footer; //We must