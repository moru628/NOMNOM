import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ViewComponent} from "react-native"
import { useEffect, useState} from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons"

const RatingThree = () => {
    const [tasteRating, setTasteRating] = useState(null);
    const [authenticityRating, setAuthenticityRating] = useState(null);
    const [ambienceRating, setAmbienceRating] = useState(null);
    
    const renderStars = (rating, setRating) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <TouchableOpacity key={i} onPress={() => setRating(i)}>
                    {i <= rating ? <MaterialIcons                                 name="star"
                        size={28}
                        color={"#FFB300" }/>
                    : <MaterialIcons
                        name="star-border" 
                        size={28} 
                        color={"#9E9E9E"}/>
                    }
                </TouchableOpacity>
            );
        }
        return <View style={styles.starsContainer}>{stars}</View>;
    };
    return(
    <View style={styles.RatingContainer}>
        <View style={styles.eachRating}>
            <Text style={styles.RatingText}>Taste</Text>
            {renderStars(tasteRating, setTasteRating)}
        </View>
        <View style={styles.eachRating}>
            <Text style={styles.RatingText}>Authenticity</Text>
            {renderStars(authenticityRating, setAuthenticityRating)}
        </View>
        <View style={styles.eachRating}>
            <Text style={styles.RatingText}>Ambience</Text>
            {renderStars(ambienceRating, setAmbienceRating)}
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    starsContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
    },
    eachRating: {
        flexDirection: 'row',
        width: 260,
        marginLeft: 25,
        justifyContent: 'space-between'
    },
    RatingText: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 16,
        paddingTop: 5
    },
})

export default RatingThree