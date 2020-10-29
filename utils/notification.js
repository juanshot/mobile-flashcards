import { AsyncStorage } from "react-native";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

const NOTIFICATION_KEY = "mobileflashcards:notifications";

export const clearAndSetNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(() => {
    Notifications.cancelAllScheduledNotificationsAsync();
    setLocalNotification();
  });
};

export const createNotification = () => {
  return {
    title: "Continue Studying!",
    body: "👋 don't forget to stydy with flashcards today!",
    ios: {
      sound: "true",
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true,
    },
  };
};
export const createLocalNotification = () => {
  return {
    title: "Continue Studying!",
    body: "👋 don't forget to stydy with flashcards today!",
    ios: {
      sound: "true",
    },
  };
};

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then((status) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day",
            });
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
          }
        });
      }
    });
};
