

const About = () => {
	return (
		<section className="py-6 dark:bg-violet-600 dark:text-gray-50">
			<div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
				<h1 className="text-5xl font-bold leading-none text-center">Welcome to our book-reading website!</h1>
				<div className="pt-2 pb-8 text-xl font-medium text-center">
					<p> We are passionate about connecting readers with great books.</p>
					<p>Our mission is to provide a platform where book lovers can discover new titles, connect with authors, and share their love for reading.</p>
					<p>Whether you're looking for bestsellers, classics, or hidden gems, we've got something for everyone.</p>
					<p>Thank you for visiting our site and happy reading!</p>
				</div>
				<button className="px-8 py-3 text-lg font-semibold rounded dark:bg-gray-100 dark:text-gray-900">Learn more</button>
			</div>
		</section>
	);
};

export default About;