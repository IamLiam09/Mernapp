import mongoose, { mongo } from "mongoose";

const connectDB = async () => {
	const mongodbURI = process.env.MONGO_URI;
	console.log("MongoDB URI:", mongodbURI);

	await mongoose
		.connect(mongodbURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => {
			console.log("MongoDB connected successfully");
			// You can now perform operations with MongoDB
			console.log(`MongoDB Connected: ${mongoose.connection.host}`);
		})
		.catch((error) => {
			console.error("MongoDB connection error:", error);
		});
};

export default connectDB;
