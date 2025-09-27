import { AppBar, Toolbar, Button, Box } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";

interface NavbarProps {
    onOpenForca: () => void;
}

const Navbar = ({ onOpenForca }: NavbarProps) => {
    return (
        <AppBar position="fixed" color="default" sx={{ backgroundColor: "black" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>

                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button variant="outlined" startIcon={<DownloadIcon />} component="a" href="/public/daviCv25.pdf" download="cv-davi-rocha.pdf">
                        Download CV
                    </Button>
                    <Button variant="outlined" startIcon={<EmailIcon />} component="a" href="https://wa.me/5587981102805" target="_blank" rel="noopener">
                        Contato
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<VideogameAssetIcon />}
                        onClick={onOpenForca}
                    >
                        Jogo da Velha
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
