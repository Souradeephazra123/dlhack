import { useState } from 'react';

const Contact = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };

    const uploadImage = async () => {
        if (!selectedImage) {
            alert("Please select an image");
            return;
        }

        const formData = new FormData();
        formData.append('img', selectedImage);

        try {
            const response = await fetch('http://172.16.40.241:5000/infer/segmentImage', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const responseData = await response.json();
            setProcessedImage(responseData.image_data);
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to upload image');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleImageChange} />
            <button onClick={uploadImage}>Upload Image</button>
            {processedImage && (
                <div>
                    <h2>Processed Image</h2>
                    <img src={`data:image/png;base64,${processedImage}`} alt="Processed" />
                </div>
            )}
        </div>
    );
};

export default Contact;
