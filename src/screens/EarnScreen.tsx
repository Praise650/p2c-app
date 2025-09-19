import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";
import { useTheme } from "../theme/ThemeContext";
import { createEarnScreenStyles } from '../styles/EarnScreen.styles';

const VaultIcon = ({ size = 24, color = "#fafcff" }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 16 16">
    <G clipPath="url(#defi-icon-safe-vault_svg__a)">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M7.964.286h.072c1.84 0 3.84 0 5.517.328A2.38 2.38 0 0 1 15.41 2.44c.304 1.373.304 2.62.304 4.434v.086c0 1.814 0 3.061-.304 4.433a2.38 2.38 0 0 1-1.857 1.826l-.01.002.36 1.427a.857.857 0 0 1-1.663.418l-.408-1.62c-1.239.102-2.553.102-3.796.102h-.072c-1.243 0-2.558 0-3.797-.101l-.407 1.62a.857.857 0 1 1-1.663-.42l.36-1.426-.01-.002A2.38 2.38 0 0 1 .59 11.394C.286 10.021.286 8.773.286 6.96v-.086c0-1.814 0-3.061.304-4.434A2.38 2.38 0 0 1 2.447.614C4.125.286 6.123.286 7.964.286m1.842 3c.395 0 .715.32.715.714v.337c.423.12.803.343 1.11.642l.293-.17a.714.714 0 1 1 .714 1.238l-.292.168a2.6 2.6 0 0 1 0 1.284l.292.168a.714.714 0 0 1-.714 1.237l-.293-.168a2.6 2.6 0 0 1-1.11.642v.336a.714.714 0 0 1-1.43 0v-.336a2.6 2.6 0 0 1-1.11-.642l-.292.168a.714.714 0 1 1-.714-1.237l.291-.168a2.6 2.6 0 0 1 0-1.284l-.291-.168a.714.714 0 1 1 .714-1.237l.292.169a2.6 2.6 0 0 1 1.11-.642V4c.001-.395.32-.714.715-.714m-1.039 2.99.008-.014.007-.013a1.19 1.19 0 0 1 2.05.004l.005.009.006.01a1.19 1.19 0 0 1 0 1.17l-.006.01-.006.01a1.19 1.19 0 0 1-2.048.004l-.008-.014-.008-.014a1.19 1.19 0 0 1 0-1.163M4 5.19c.394 0 .714.32.714.715v1.904a.714.714 0 0 1-1.428 0V5.906c0-.395.32-.715.714-.715"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="defi-icon-safe-vault_svg__a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

const DollarCoinIcon = ({ size = 24, color = "#fafcff" }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 16 16">
    <G clipPath="url(#a)">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M11.805 0c-1.263 0-2.331.357-3.083 1.109-.751.751-1.108 1.819-1.108 3.083 0 1.263.357 2.331 1.108 3.083.752.751 1.82 1.108 3.083 1.108s2.332-.357 3.083-1.108 1.109-1.82 1.109-3.083-.357-2.332-1.109-3.083C14.137.357 13.068 0 11.805 0m0 3.3c.474 0 .857.384.857.858v.068a.857.857 0 0 1-1.714 0v-.068c0-.474.384-.858.857-.858m1.58 7.501-3.081.731-1.819.453a3.1 3.1 0 0 1-1.37.029l-3.147-.643a.621.621 0 0 1 .244-1.218l1.393.273.048.009a1.347 1.347 0 0 0 .568-2.631l-2.63-.671a5.7 5.7 0 0 0-1.809-.164l-1.25.086a.571.571 0 0 0-.532.57v6c0 .242.153.458.38.539l3.79 1.341a8.63 8.63 0 0 0 6.128-.14l4.023-1.634a1.542 1.542 0 0 0-.937-2.93"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

const NativeStakingIcon = ({ size = 24, color = "#fafcff" }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 16 16">
    <Path
      fill={color}
      fillRule="evenodd"
      d="M1.333 6.857a6.857 6.857 0 1 1 13.715 0c0 2.226-1.279 4.263-2.611 5.795-1.346 1.547-2.827 2.67-3.396 3.079-.256.183-.554.269-.85.269-.297 0-.595-.086-.851-.27-.569-.407-2.05-1.532-3.396-3.078-1.332-1.532-2.61-3.57-2.61-5.795M8.905 3.43a.714.714 0 1 0-1.429 0v.447l-.015.002a2.4 2.4 0 0 0-.782.188c-.28.128-.529.337-.697.649-.16.298-.22.64-.22 1 0 .73.392 1.215.854 1.522.402.268.909.437 1.305.57l.044.013c.454.152.782.267 1.008.417.181.121.217.208.217.334 0 .212-.036.299-.048.322l-.002.002c-.004.008-.007.015-.036.028a1 1 0 0 1-.307.062A7 7 0 0 1 8.19 9c-.424 0-.705-.068-.856-.155a.3.3 0 0 1-.108-.095.34.34 0 0 1-.036-.179.714.714 0 0 0-1.428 0c0 .693.335 1.21.86 1.512.26.15.554.24.854.29v.484a.714.714 0 1 0 1.429 0v-.448l.015-.001c.242-.021.52-.067.782-.188.28-.129.529-.337.697-.649.16-.298.22-.64.22-1 0-.73-.392-1.215-.854-1.522-.402-.269-.909-.437-1.305-.57l-.044-.014c-.455-.151-.782-.266-1.008-.416-.181-.121-.218-.208-.218-.335 0-.211.037-.298.05-.322V5.39c.005-.008.008-.014.037-.027a1 1 0 0 1 .307-.062c.169-.015.362-.015.606-.015.377 0 .663.088.83.194.152.097.17.177.17.234a.714.714 0 1 0 1.43 0c0-.65-.366-1.142-.833-1.44a2.6 2.6 0 0 0-.882-.346z"
      clipRule="evenodd"
    />
  </Svg>
);

// Partner Logo Components
type PartnerLogoProps = {
  name: string;
  size?: number;
};

const PartnerLogo: React.FC<PartnerLogoProps> = ({ name, size = 24 }) => {
  const getLogoSource = () => {
    switch (name) {
      case "Navi":
        return require("../../assets/navi_logo.png");
      case "Scallop":
        return require("../../assets/scallop_logo.png");
      case "Suilend":
        return require("../../assets/suilend_logo.png");
      case "Kriya":
        return require("../../assets/Kria-Brand-Logo-Transparent.png");
      case "Cetus":
        return require("../../assets/cetus-icon.png");
      default:
        return require("../../assets/navi_logo.png");
    }
  };

  return (
    <Image
      source={getLogoSource()}
      style={{ width: size, height: size }}
      resizeMode="contain"
    />
  );
};

const LiquidStakingIcon = ({ size = 24, color = "#fafcff" }) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 16 16">
    <G clipPath="url(#liquid-staking-icon)">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M9.805 0C7.9 0 6.33.538 5.239 1.63s-1.63 2.66-1.63 4.565.538 3.474 1.63 4.566 2.66 1.63 4.566 1.63 3.473-.538 4.565-1.63S16 8.101 16 6.195s-.537-3.473-1.63-4.565S11.71 0 9.805 0m.139 2.052c.394 0 .714.32.714.715v.517a2.7 2.7 0 0 1 1.22.708l.013.013.005.005.002.002v.001s.001.001-.53.478l.531-.477a.714.714 0 0 1-1.057.961l-.004-.004-.042-.039a1.3 1.3 0 0 0-.198-.14 1.2 1.2 0 0 0-.71-.162c-.34.03-.528.14-.624.235a.43.43 0 0 0-.135.308c0 .108.022.145.026.15.003.007.017.028.074.06.15.086.385.136.793.212l.04.007c.335.062.816.15 1.206.38.221.13.436.315.59.581.155.267.224.569.224.891 0 .501-.272.894-.578 1.152a2.5 2.5 0 0 1-.846.454v.564a.714.714 0 1 1-1.428 0v-.46a2.83 2.83 0 0 1-1.47-.703.714.714 0 0 1 .963-1.055c.377.343.905.43 1.366.33.228-.051.397-.14.493-.22a.3.3 0 0 0 .071-.078c-.002-.105-.024-.146-.03-.157s-.023-.035-.078-.067c-.148-.087-.381-.14-.784-.215l-.056-.01c-.33-.06-.8-.147-1.181-.363a1.6 1.6 0 0 1-.595-.569 1.7 1.7 0 0 1-.228-.884c0-.869.584-1.602 1.529-1.87v-.536c0-.395.32-.715.714-.715M2.18 6.195q0-.774.107-1.508a5 5 0 0 0-.658.552C.538 6.331 0 7.899 0 9.805s.538 3.473 1.63 4.565S4.29 16 6.195 16s3.474-.537 4.566-1.63q.305-.305.552-.658-.735.107-1.508.107c-2.168 0-4.144-.615-5.576-2.048C2.796 10.34 2.18 8.363 2.18 6.195"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="liquid-staking-icon">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

const EarnScreen = () => {
  const { theme } = useTheme();
  const styles = createEarnScreenStyles(theme);
  const lendingPartners = [
    {
      name: "Navi",
      apy: "0.02%–109.70%",
      logo: "https://fe-assets.mystenlabs.com/wallet_next/navi_logo.svg",
      url: "https://app.naviprotocol.io/",
    },
    {
      name: "Scallop",
      apy: "0.00%–43.45%",
      logo: "https://fe-assets.mystenlabs.com/wallet_next/scallop_logo.png",
      url: "https://app.scallop.io/",
    },
    {
      name: "Suilend",
      apy: "0.00%–1095.23%",
      logo: "https://fe-assets.mystenlabs.com/wallet_next/suilend_logo.png",
      url: "https://suilend.fi/dashboard",
    },
  ];

  const vaultPartners = [
    {
      name: "Scallop",
      logo: "https://fe-assets.mystenlabs.com/wallet_next/scallop_logo.png",
      url: "https://app.scallop.io/",
    },
    {
      name: "Kriya",
      logo: "https://images.ctfassets.net/hat58eb39gq2/6hnejfZ75brMn1swPVCDpb/833fee6e542813b3715d88fcc87f7b4a/Kria-Brand-Logo-Transparent.png",
      url: "https://app.kriya.finance/strategies",
    },
    {
      name: "Cetus",
      apy: "0.68%–5.10%",
      logo: "https://images.ctfassets.net/hat58eb39gq2/7LOvlMkQLMcWfwGgzumEMd/83fceee707bf1000793b63b0039506e4/cetus-icon.png",
      url: "https://app.cetus.zone/vaults",
    },
  ];

  const [lendingOpen, setLendingOpen] = useState(true);
  const [vaultOpen, setVaultOpen] = useState(true);

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.backgroundPrimary }]}
    >
      <View
        style={[
          styles.subcontainer,
          { backgroundColor: theme.backgroundTertiary },
        ]}
      >
        <View style={styles.header}>
          <Text style={[styles.title, { color: theme.contentPrimary }]}>
            Invest to earn
          </Text>
          <Text style={[styles.subtitle, { color: theme.contentSecondary }]}>
            Do more with your assets on Sui for the chance to earn
          </Text>
        </View>

        {/* Lending Section */}
        <View
          style={[
            styles.section,
            {
              backgroundColor: theme.backgroundSecondary,
              borderWidth: 1,
              borderColor: theme.borderWeak,
            },
          ]}
        >
          <TouchableOpacity
            style={[
              styles.sectionHeader,
              { borderBottomColor: theme.borderWeak },
            ]}
            onPress={() => setLendingOpen((v) => !v)}
            activeOpacity={0.8}
          >
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: theme.borderWeak },
              ]}
            >
              <DollarCoinIcon size={20} color={theme.contentPrimary} />
            </View>
            <View style={styles.sectionTitleContainer}>
              <Text
                style={[styles.sectionTitle, { color: theme.contentPrimary }]}
              >
                Start lending
              </Text>
              <Text
                style={[
                  styles.sectionSubtitle,
                  { color: theme.contentSecondary },
                ]}
              >
                Lend or borrow crypto peer-to-peer
              </Text>
            </View>
            <View style={styles.expandButton}>
              <Text
                style={[
                  styles.expandIcon,
                  lendingOpen && styles.expandIconOpen,
                  { color: theme.contentSecondary },
                ]}
              >
                ▶
              </Text>
            </View>
          </TouchableOpacity>

          {lendingOpen && (
            <View style={styles.partnersList}>
              {lendingPartners.map((partner, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.partnerItem,
                    {
                      backgroundColor: theme.backgroundInverse,
                      borderWidth: 1,
                      borderColor: theme.borderWeak,
                    },
                  ]}
                >
                  <View style={styles.partnerInfo}>
                    <View
                      style={[
                        styles.partnerLogo,
                        { backgroundColor: theme.backgroundPrimary },
                      ]}
                    >
                      <PartnerLogo name={partner.name} size={20} />
                    </View>
                    <View style={styles.partnerDetails}>
                      <Text
                        style={[
                          styles.partnerName,
                          { color: theme.contentPrimary },
                        ]}
                      >
                        {partner.name}
                      </Text>
                      {partner.apy && (
                        <Text
                          style={[
                            styles.partnerApy,
                            { color: theme.contentSecondary },
                          ]}
                        >
                          {partner.apy}
                        </Text>
                      )}
                    </View>
                  </View>
                  <Text
                    style={[styles.plusIcon, { color: theme.contentSecondary }]}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Vault Section */}
        <View
          style={[
            styles.section,
            {
              backgroundColor: theme.backgroundSecondary,
              borderWidth: 1,
              borderColor: theme.borderWeak,
            },
          ]}
        >
          <TouchableOpacity
            style={[
              styles.sectionHeader,
              { borderBottomColor: theme.borderWeak },
            ]}
            onPress={() => setVaultOpen((v) => !v)}
            activeOpacity={0.8}
          >
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: theme.borderWeak },
              ]}
            >
              <VaultIcon size={20} color={theme.contentPrimary} />
            </View>
            <View style={styles.sectionTitleContainer}>
              <Text
                style={[styles.sectionTitle, { color: theme.contentPrimary }]}
              >
                Start vault depositing
              </Text>
              <Text
                style={[
                  styles.sectionSubtitle,
                  { color: theme.contentSecondary },
                ]}
              >
                Automated asset management
              </Text>
            </View>
            <View style={styles.expandButton}>
              <Text
                style={[
                  styles.expandIcon,
                  vaultOpen && styles.expandIconOpen,
                  { color: theme.contentSecondary },
                ]}
              >
                ▶
              </Text>
            </View>
          </TouchableOpacity>
          {vaultOpen && (
            <View style={styles.partnersList}>
              {vaultPartners.map((partner, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.partnerItem,
                    {
                      backgroundColor: theme.backgroundInverse,
                      borderWidth: 1,
                      borderColor: theme.borderWeak,
                    },
                  ]}
                >
                  <View style={styles.partnerInfo}>
                    <View
                      style={[
                        styles.partnerLogo,
                        { backgroundColor: theme.backgroundPrimary },
                      ]}
                    >
                      <PartnerLogo name={partner.name} size={20} />
                    </View>
                    <View style={styles.partnerDetails}>
                      <Text
                        style={[
                          styles.partnerName,
                          { color: theme.contentPrimary },
                        ]}
                      >
                        {partner.name}
                      </Text>
                      {partner.apy && (
                        <Text
                          style={[
                            styles.partnerApy,
                            { color: theme.contentSecondary },
                          ]}
                        >
                          {partner.apy}
                        </Text>
                      )}
                    </View>
                  </View>
                  <Text
                    style={[styles.plusIcon, { color: theme.contentSecondary }]}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        {/* Liquid Staking Section */}
        <View
          style={[
            styles.section,
            {
              backgroundColor: theme.backgroundSecondary,
              borderWidth: 1,
              borderColor: theme.borderWeak,
            },
          ]}
        >
          <View
            style={[
              styles.sectionHeader,
              { borderBottomColor: theme.borderWeak },
            ]}
          >
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: theme.borderWeak },
              ]}
            >
              <LiquidStakingIcon size={20} color={theme.contentPrimary} />
            </View>
            <View style={styles.sectionTitleContainer}>
              <Text
                style={[styles.sectionTitle, { color: theme.contentPrimary }]}
              >
                Start liquid staking
              </Text>
              <Text
                style={[
                  styles.sectionSubtitle,
                  { color: theme.contentSecondary },
                ]}
              >
                Receive liquid SUI while you earn
              </Text>
            </View>
          </View>
        </View>

        {/* Native Staking Section */}
        <View
          style={[
            styles.section,
            {
              backgroundColor: theme.backgroundSecondary,
              borderWidth: 1,
              borderColor: theme.borderWeak,
            },
          ]}
        >
          <View
            style={[
              styles.sectionHeader,
              { borderBottomColor: theme.borderWeak },
            ]}
          >
            <View
              style={[
                styles.iconContainer,
                { backgroundColor: theme.borderWeak },
              ]}
            >
              <NativeStakingIcon size={20} color={theme.contentPrimary} />
            </View>
            <View style={styles.sectionTitleContainer}>
              <Text
                style={[styles.sectionTitle, { color: theme.contentPrimary }]}
              >
                Start native staking
              </Text>
              <Text
                style={[
                  styles.sectionSubtitle,
                  { color: theme.contentSecondary },
                ]}
              >
                Lock assets on Sui while you earn
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ height: 100 }} />
    </ScrollView>
  );
};


export default EarnScreen;
