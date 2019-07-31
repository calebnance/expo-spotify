import colors from './colors';
import fonts from './fonts';

// space grid, some use 8pt grid, some 5pt, this is setting one place then done
const spaceGrid = 8;

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
  mB1: { marginBottom: spaceGrid },
  mR1: { marginRight: spaceGrid },
  mR2: { marginRight: spaceGrid * 2 },
  mR3: { marginRight: spaceGrid * 3 },
  mR6: { marginRight: spaceGrid * 6 },
  mR8: { marginRight: spaceGrid * 8 },
  mTHalf: { marginTop: spaceGrid / 2 },
  mT1: { marginTop: spaceGrid },
  mT2: { marginTop: spaceGrid * 2 },

  mH3: { marginHorizontal: spaceGrid * 3 },

  mV2: { marginVertical: spaceGrid * 2 },
  mV3: { marginVertical: spaceGrid * 3 },
  mV4: { marginVertical: spaceGrid * 4 },

  // paddings
  // ///////////////////////////////////////////////////////////////////////////
  pHalf: { padding: spaceGrid / 2 },
  p1: { padding: spaceGrid },
  p2: { padding: spaceGrid * 2 },
  p3: { padding: spaceGrid * 3 },

  pHHalf: { paddingHorizontal: spaceGrid / 2 },
  pH8: { paddingHorizontal: spaceGrid },
  pH16: { paddingHorizontal: spaceGrid * 2 },
  pH3: { paddingHorizontal: spaceGrid * 3 },

  // navigation styles
  // ///////////////////////////////////////////////////////////////////////////
  navHeaderStyle: {
    backgroundColor: colors.black,
    borderBottomWidth: 0,
    elevation: 0
  }
};
