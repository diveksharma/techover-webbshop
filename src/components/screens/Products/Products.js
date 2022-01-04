import React from 'react';
import Navbar from '../../Navbar/Navbar';
import { Typography, Grid, styled, Button, Container,} from '@mui/material';
import useStyles from './Styles';
import { connect } from 'react-redux';
import ProductCard from '../../ProductCard/ProductCard'

const Products = ({products, loading, error}) => {
	const classes = useStyles();

	const renderProductCards = () => {
		if(loading) return [1,2,3,4,5].map((d) => <ProductCard Loading={loading} key={d}/>);
		const array = products.map((item) => {
			return <ProductCard title={item} Loading={loading} key={item.id}/>;
		});
		return array;
	};

	return (
		<div id="Products_screen">
			<Navbar />
			<Container maxwidht="md">
				<div className="Products_view">
					({/* header */})
						<Typography variant="h1">Välj varor</Typography>
					({/* END Header */})

					({/* Items */})
					<Grid container spacing={2} justify="center">
						<Grid Item xs={12}>
							{renderProductCards()}
						</Grid>
					</Grid>
					({/* END Items */})
				</div>
			</Container>
		</div>
	);
};

	const mapState = (state) => {
		const {items, loading, error} = state.products;
		return { products: items, loading, error };
	};


export default connect(mapState)(Products);

