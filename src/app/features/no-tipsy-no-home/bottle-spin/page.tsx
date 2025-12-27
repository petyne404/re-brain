"use client"
import { penalties } from "@/app/constants/bottle-sping";
import { Box, Button, Container, Modal, Typography } from "@mui/material"
import { useState } from "react"

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

const Page = () => {
	const [rotation, setRotation] = useState(0);
	const [selectedPenalty, setSelectedPenalty] = useState<{
		id: number;
		penalty_name: string;
		description: string;
	} | null>(null);
	const [open, setOpen] = useState(false);

	const spinBottle = () => {
		const randomRotation = Math.floor(Math.random() * 3600) + 720;
		setRotation(rotation + randomRotation);

		setTimeout(() => {
			const randomIndex = Math.floor(Math.random() * penalties.length);
			setSelectedPenalty(penalties[randomIndex]);
			setOpen(true);
		}, 4000);
	};

	const handleClose = () => {
		setOpen(false);
		setSelectedPenalty(null);
	};

	return (
		<Container sx={{ textAlign: "center", mt: 4 }}>
			<Typography variant="h4" gutterBottom>
				ขวดไม่ได้หมุน หัวมึงอ่ะหมุน
			</Typography>
			<Box sx={{ my: 10, display: "flex", justifyContent: "center" }}>
				<img
					src="/images/green-bottle.png"
					alt="bottle"
					style={{
						width: "150px",
						transition: "transform 4s ease-out",
						transform: `rotate(${rotation}deg)`,
					}}
				/>
			</Box>
			<Button variant="contained" onClick={spinBottle}>
				หมุนขวด
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						{selectedPenalty?.penalty_name}
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						{selectedPenalty?.description}
					</Typography>
				</Box>
			</Modal>
		</Container>
	);
};

export default Page;