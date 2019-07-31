import colors from './colors';
import fonts from './fonts';

export default {
  activeOpacity: 0.7,
  container: {
    backgroundColor: colors.blackBg,
    flex: 1
  },

  // flex
  // ///////////////////////////////////////////////////////////////////////////
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  flexRow: {
    flexDirection: 'row'
  },
  flexRowCenterAlign: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  flexRowCenter: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  flexRowSpace: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flex4: { flex: 4 },
  flex5: { flex: 5 },

  // text
  // ///////////////////////////////////////////////////////////////////////////
  textSpotify10: { fontFamily: fonts.spotifyRegular, fontSize: 10 },
  textSpotify12: { fontFamily: fonts.spotifyRegular, fontSize: 12 },
  textSpotify14: { fontFamily: fonts.spotifyRegular, fontSize: 14 },
  textSpotify16: { fontFamily: fonts.spotifyRegular, fontSize: 16 },
  textSpotify18: { fontFamily: fonts.spotifyRegular, fontSize: 18 },
  textSpotifyBold12: { fontFamily: fonts.spotifyBold, fontSize: 12 },
  textSpotifyBold16: { fontFamily: fonts.spotifyBold, fontSize: 16 },
  textSpotifyBold18: { fontFamily: fonts.spotifyBold, fontSize: 18 },
  textSpotifyBold20: { fontFamily: fonts.spotifyBold, fontSize: 20 },
  textSpotifyBold22: { fontFamily: fonts.spotifyBold, fontSize: 22 },
  textSpotifyBold24: { fontFamily: fonts.spotifyBold, fontSize: 24 },

  // spacers
  // ///////////////////////////////////////////////////////////////////////////
  spacer24: { height: 24 },
  spacer48: { height: 48 },
  spacer64: { height: 64 },
  spacer88: { height: 88 },
  spacer128: { height: 128 },

  // margins
  // ///////////////////////////////////////////////////////////////////////////
  mB8: { marginBottom: 8 },
  mR8: { marginRight: 8 },
  mR16: { marginRight: 16 },
  mR24: { marginRight: 24 },
  mR48: { marginRight: 48 },
  mR64: { marginRight: 64 },
  mT4: { marginTop: 4 },
  mT8: { marginTop: 8 },
  mT16: { marginTop: 16 },

  mH24: { marginHorizontal: 24 },

  mV16: { marginVertical: 16 },
  mV24: { marginVertical: 24 },
  mV32: { marginVertical: 32 },

  // paddings
  // ///////////////////////////////////////////////////////////////////////////
  p4: { padding: 4 },
  p8: { padding: 8 },
  p16: { padding: 16 },
  p24: { padding: 24 },

  pH4: { paddingHorizontal: 4 },
  pH8: { paddingHorizontal: 8 },
  pH16: { paddingHorizontal: 16 },
  pH24: { paddingHorizontal: 24 },

  // navigation styles
  // ///////////////////////////////////////////////////////////////////////////
  navHeaderStyle: {
    backgroundColor: colors.black,
    borderBottomWidth: 0,
    elevation: 0
  }
};
