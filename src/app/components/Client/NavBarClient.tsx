'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

const navButtonStyle = {
	color: '#eaeaea',
	textTransform: 'none',
	fontWeight: 500,
	fontSize: 14.5,
	px: 2,
	borderRadius: 2,
	transition: 'all 0.25s ease',
	'&:hover': {
		backgroundColor: 'rgba(255,255,255,0.08)',
		color: '#fff',
	},
};

interface Props {
	categories: {
		id: bigint;
		name: string;
		image: string;
		slug: string;
	}[];
}

export default function NavBarClient({ categories }: Props) {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="sticky" elevation={0} sx={{
			background: 'rgba(20,20,20,0.85)',
			backdropFilter: 'blur(12px)',
			borderBottom: '1px solid rgba(255,255,255,0.08)',
		}}>
			<Container maxWidth="xl">
				<Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>


					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							display: { xs: 'none', md: 'flex' },
							fontWeight: 700,
							letterSpacing: 1,
							color: '#fff',
						}}
					>
						Tudo Piso
					</Typography>


					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="menu de navegação"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
							keepMounted
							transformOrigin={{ vertical: 'top', horizontal: 'left' }}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
								'& .MuiPaper-root': {
									bgcolor: '#1a1a1a',
									color: '#fff',
									border: '1px solid rgba(255,255,255,0.1)'
								}
							}}
						>
							<MenuItem onClick={handleCloseNavMenu} component={Link} href="/">
								<Typography textAlign="center">Início</Typography>
							</MenuItem>
							{categories.map((category) => (
								<MenuItem
									key={category.id.toString()}
									onClick={handleCloseNavMenu}
									component={Link}
									href={`/${category.slug}`}
								>
									<Typography textAlign="center">{category.name}</Typography>
								</MenuItem>
							))}
							<MenuItem onClick={handleCloseNavMenu} component={Link} href="/quem-somos">
								<Typography textAlign="center" sx={{ fontWeight: 700 }}>Quem Somos</Typography>
							</MenuItem>
						</Menu>
					</Box>


					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontWeight: 700,
							color: '#fff',
						}}
					>
						Tudo Piso
					</Typography>


					<Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 0.5 }}>
						<Link href="/" style={{ textDecoration: 'none' }}>
							<Button sx={navButtonStyle}>Início</Button>
						</Link>

						{categories.map((category) => (
							<Link
								key={category.id.toString()}
								href={`/${category.slug}`}
								style={{ textDecoration: 'none' }}
							>
								<Button sx={navButtonStyle}>{category.name}</Button>
							</Link>
						))}

						<Link href="/quem-somos" style={{ textDecoration: 'none' }}>
							<Button variant="contained" sx={{
								ml: 1,
								textTransform: 'none',
								fontWeight: 600,
								borderRadius: 999,
								px: 2.5,
								background: 'linear-gradient(135deg, #6d6d6d, #2b2b2b)',
								boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
								'&:hover': {
									background: 'linear-gradient(135deg, #7a7a7a, #000)',
								},
							}}>
								Quem somos
							</Button>
						</Link>
					</Box>

				</Toolbar>
			</Container>
		</AppBar>
	);
}