import { React, StyleSheet, View } from '../../libraries';

const AuthContainer = ({ children }) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});

export default AuthContainer;
