import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { firestore } from '../config/Firebase';
import { collection, getDocs } from '@firebase/firestore';
import DetailedAnalysisCard from '../components/DetailedAnalysisCard';

const Analysis = () => {
    const [detailItems, setDetailItems] = useState([]);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const detailsRef = collection(firestore, 'inventory');
                const detailsSnapshot = await getDocs(detailsRef);
                const details = detailsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setDetailItems(details);
            } catch (error) {
                console.log("Error getting details", error);
            }
        };
        fetchDetails();
    }, []);

    const handleViewDetails = (itemId) => {
        // Implement logic to show more details for the specific item with itemId
        // You can use itemId to find the specific item details from detailItems array
        console.log("View Details for item:", itemId);
    };

    return (
        <View>
           
            {detailItems.map(item => (
                <DetailedAnalysisCard
                    key={item.id}
                    vendorContact={item.vendorContact}
                    vendorName={item.vendorName}
                    onViewDetails={() => handleViewDetails(item.id)} // Pass function to handle button click with itemId
                />
            ))}
        </View>
    );
}

export default Analysis;
