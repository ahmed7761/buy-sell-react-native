import * as SecureStore from 'expo-secure-store';

const key = "authToken";

const storeToken = async authToken => {
    try {
        await SecureStore.setItemAsync(key, authToken)
    } catch (e) {
        console.log('Error storing auth token ', e)
    }
};

const getToken = async () => {
    try {
        return  await SecureStore.getItemAsync(key)
    } catch (e) {
        console.log('Error getting auth token ', e)
    }
};

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key)
    } catch (e) {
        console.log('Error removing auth token ', e)
    }
};

export default {
    getToken,
    removeToken,
    storeToken
}