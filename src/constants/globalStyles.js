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
  containerAbsolute: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 50
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

  // navigation styles
  // ///////////////////////////////////////////////////////////////////////////
  navHeaderStyle: {
    backgroundColor: colors.black,
    borderBottomWidth: 0,
    elevation: 0
  },

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
  spacer1: { height: spaceGrid * 1 },
  spacer2: { height: spaceGrid * 2 },
  spacer3: { height: spaceGrid * 3 },
  spacer4: { height: spaceGrid * 3 },
  spacer6: { height: spaceGrid * 6 },
  spacer8: { height: spaceGrid * 8 },
  spacer11: { height: spaceGrid * 11 },
  spacer16: { height: spaceGrid * 16 },
  spacer24: { height: spaceGrid * 24 },
  spacer48: { height: spaceGrid * 48 },
  spacer64: { height: spaceGrid * 64 },
  spacer88: { height: spaceGrid * 88 },
  spacer128: { height: spaceGrid * 128 },

  // margins
  // ///////////////////////////////////////////////////////////////////////////

  mB1: { marginBottom: spaceGrid },
  mB2: { marginBottom: spaceGrid * 2 },
  mB3: { marginBottom: spaceGrid * 3 },
  mB4: { marginBottom: spaceGrid * 4 },
  mB8: { marginBottom: spaceGrid * 8 },
  mB22: { marginBottom: spaceGrid * 24 },

  mL1: { marginLeft: spaceGrid },
  mL2: { marginLeft: spaceGrid * 2 },
  mL3: { marginLeft: spaceGrid * 3 },
  mL4: { marginLeft: spaceGrid * 4 },

  mR1: { marginRight: spaceGrid },
  mR2: { marginRight: spaceGrid * 2 },
  mR3: { marginRight: spaceGrid * 3 },
  mR4: { marginRight: spaceGrid * 4 },
  mR8: { marginRight: spaceGrid * 8 },
  mR16: { marginRight: spaceGrid * 16 },
  mR24: { marginRight: spaceGrid * 24 },
  mR48: { marginRight: spaceGrid * 48 },
  mR64: { marginRight: spaceGrid * 64 },

  mTHalf: { marginTop: spaceGrid / 2 },
  mT1: { marginTop: spaceGrid },
  mT2: { marginTop: spaceGrid * 2 },
  mT3: { marginTop: spaceGrid * 3 },
  mT4: { marginTop: spaceGrid * 4 },
  mT8: { marginTop: spaceGrid * 8 },
  mT16: { marginTop: spaceGrid * 16 },

  mH1: { marginHorizontal: spaceGrid * 1 },
  mH2: { marginHorizontal: spaceGrid * 2 },
  mH3: { marginHorizontal: spaceGrid * 3 },
  mH4: { marginHorizontal: spaceGrid * 4 },
  mH24: { marginHorizontal: spaceGrid * 24 },

  mV1: { marginVertical: spaceGrid * 1 },
  mV2: { marginVertical: spaceGrid * 2 },
  mV3: { marginVertical: spaceGrid * 3 },
  mV4: { marginVertical: spaceGrid * 4 },
  mV16: { marginVertical: spaceGrid * 16 },
  mV24: { marginVertical: spaceGrid * 24 },
  mV32: { marginVertical: spaceGrid * 32 },

  // paddings
  // ///////////////////////////////////////////////////////////////////////////
  pHalf: { padding: spaceGrid / 2 },
  p1: { padding: spaceGrid },
  p2: { padding: spaceGrid * 2 },
  p3: { padding: spaceGrid * 3 },

  pB1: { paddingBottom: spaceGrid },
  pB2: { paddingBottom: spaceGrid * 2 },
  pB3: { paddingBottom: spaceGrid * 3 },

  pL1: { paddingLeft: spaceGrid },
  pL2: { paddingLeft: spaceGrid * 2 },
  pL3: { paddingLeft: spaceGrid * 3 },

  pR1: { paddingRight: spaceGrid },
  pR2: { paddingRight: spaceGrid * 2 },
  pR3: { paddingRight: spaceGrid * 3 },

  pT1: { paddingTop: spaceGrid },
  pT2: { paddingTop: spaceGrid * 2 },
  pT3: { paddingTop: spaceGrid * 3 },

  pHHalf: { paddingHorizontal: spaceGrid / 2 },
  pH1: { paddingHorizontal: spaceGrid },
  pH2: { paddingHorizontal: spaceGrid * 2 },
  pH3: { paddingHorizontal: spaceGrid * 3 }
};
