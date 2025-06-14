"use client";

import { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { alpha, styled } from "@mui/material/styles";
import Link from "next/link";
import Image from "next/image";

const pages = ["Home", "Features", "About"];

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: alpha(theme.palette.background.default, 0.8),
  backdropFilter: "blur(10px)",
  boxShadow: "none",
  borderBottom: `1px solid ${alpha(theme.palette.grey[800], 0.2)}`,
  transition: theme.transitions.create(
    ["background-color", "box-shadow", "border-bottom"],
    {
      duration: theme.transitions.duration.standard,
    }
  ),
  "&.scrolled": {
    background: alpha(theme.palette.background.default, 0.95),
    boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.2)}`,
    borderBottom: `1px solid ${alpha(theme.palette.grey[800], 0.3)}`,
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.grey[300],
  fontWeight: 500,
  fontSize: "0.95rem",
  textTransform: "none",
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create(["background-color", "color"], {
    duration: theme.transitions.duration.shorter,
  }),
  "&:hover": {
    backgroundColor: alpha(theme.palette.grey[700], 0.2),
    color: theme.palette.grey[100],
  },
  "&.active": {
    color: theme.palette.grey[100],
    backgroundColor: alpha(theme.palette.grey[700], 0.2),
  },
}));

const Logo = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.grey[300]}, ${theme.palette.grey[100]})`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 700,
  letterSpacing: "0.02em",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
}));

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      sx={{
        height: "100%",
        bgcolor: "background.default",
        py: 2,
      }}
    >
      <Box sx={{ px: 2, mb: 3 }}>
        <Logo variant="h6">ReBrain</Logo>
      </Box>
      <List>
        {pages.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton
              sx={{
                borderRadius: 1,
                mx: 1,
                "&:hover": {
                  bgcolor: alpha(theme.palette.primary.main, 0.08),
                  color: "primary.main",
                },
              }}
            >
              <ListItemText
                primary={page}
                primaryTypographyProps={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <StyledAppBar position="sticky" className={isScrolled ? "scrolled" : ""}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ height: 70 }}>
          {isMobile ? (
            <>
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  color: "text.primary",
                  "&:hover": {
                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              <Logo variant="h6">
                <Link href="/">
                  <Image
                    src="/images/logo/logo.svg"
                    width={200}
                    height={100}
                    alt="rebrain logo"
                  />
                </Link>
              </Logo>
            </>
          ) : (
            <>
              <Logo variant="h6" sx={{ mr: 4 }}>
                <Image
                  src="/images/logo/logo.svg"
                  width={200}
                  height={100}
                  alt="rebrain logo"
                />
              </Logo>
              <Stack direction="row" spacing={1}>
                {pages.map((page) => (
                  <Link href={`/#${page}`} key={page}>
                    <NavButton key={page}>{page}</NavButton>
                  </Link>
                ))}
              </Stack>
            </>
          )}

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" spacing={1} alignItems="center">
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{
                  p: 0,
                  border: `2px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                  "&:hover": {
                    bgcolor: alpha(theme.palette.primary.main, 0.08),
                  },
                }}
              >
                <Avatar
                  alt="User"
                  src="/static/images/avatar/2.jpg"
                  sx={{ width: 32, height: 32 }}
                />
              </IconButton>
            </Tooltip>
          </Stack>

          <Menu
            sx={{
              mt: "45px",
              "& .MuiPaper-root": {
                borderRadius: 2,
                minWidth: 180,
                boxShadow: theme.shadows[3],
                border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                bgcolor: alpha(theme.palette.background.paper, 0.9),
                backdropFilter: "blur(10px)",
              },
            }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem
              onClick={handleCloseUserMenu}
              sx={{
                borderRadius: 1,
                mx: 1,
                width: "calc(100% - 16px)",
                "&:hover": {
                  bgcolor: alpha(theme.palette.primary.main, 0.08),
                },
              }}
            >
              <Typography>Profile</Typography>
            </MenuItem>
            <MenuItem
              onClick={handleCloseUserMenu}
              sx={{
                borderRadius: 1,
                mx: 1,
                width: "calc(100% - 16px)",
                "&:hover": {
                  bgcolor: alpha(theme.palette.primary.main, 0.08),
                },
              }}
            >
              <Typography>Logout</Typography>
            </MenuItem>
          </Menu>

          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            PaperProps={{
              sx: {
                width: 280,
                border: "none",
                boxShadow: theme.shadows[3],
                bgcolor: alpha(theme.palette.background.paper, 0.9),
                backdropFilter: "blur(10px)",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
