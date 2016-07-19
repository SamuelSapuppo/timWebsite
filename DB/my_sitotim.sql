-- phpMyAdmin SQL Dump
-- version 4.1.7
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Lug 19, 2016 alle 22:25
-- Versione del server: 5.6.29-log
-- PHP Version: 5.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `my_sitotim`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `Actrules_timvision`
--

CREATE TABLE IF NOT EXISTS `Actrules_timvision` (
  `IdAct` int(11) NOT NULL,
  `Cont1` varchar(1000) CHARACTER SET latin1 COLLATE latin1_general_ci DEFAULT NULL,
  `Cont2` varchar(1000) CHARACTER SET latin1 COLLATE latin1_general_ci DEFAULT NULL,
  `Cont3` varchar(1000) CHARACTER SET latin1 COLLATE latin1_general_ci DEFAULT NULL,
  `Cont4` varchar(1000) CHARACTER SET latin1 COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`IdAct`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `Actrules_timvision`
--

INSERT INTO `Actrules_timvision` (`IdAct`, `Cont1`, `Cont2`, `Cont3`, `Cont4`) VALUES
(1, '&#8226 La promozione TIMvision con decoder, valida per attivazioni  entro il 30/06/2016, è riservata a tutti<br>\r\n i clienti con ADSL Illimitata e Fibra Ottica di TIM, sia nuovi che già clienti.<br>\r\nComprende l’abbonamento TIMvision e il decoder (a noleggio) al prezzo di 5 &#8364 /mese.', '&#8226 In caso di cessazione dell’offerta, il cliente sarà tenuto a restituire il decoder, entro 30 giorni dalla<br>\r\ndata di cessazione dell’offerta,  tramite corriere o pacco postale, all’indirizzo indicato nella fattura<br>\r\nTIM o fornito dal Servizio Clienti 187, dando comunicazione della spedizione allo stesso Servizio<br>\r\n Clienti 187. In alternativa, il cliente può esercitare l’opzione d’acquisto del decoder TIMvision.<br>\r\nLa mancata restituzione del decoder da parte del cliente nel termine sopra previsto sar&agrave <br>\r\nconsiderata a tutti gli effetti come esercizio dell’opzione di acquisto del decoder stesso<br>\r\nda parte del cliente. Il prezzo di acquisto sarà diverso in funzione dell’anno in cui avviene<br>\r\n la cessazione: 59 &#8364 se la cessazione viene richiesta nel primo anno, 39 &#8364 a partire dal secondo anno.', '&#8226 Il cliente potrà richiedere, in qualsiasi momento, la sospensione dell’abbonamento per un<br>\r\nmassimo di 3 volte in un anno solare, con interruzione del corrispettivo mensile da parte di Telecom<br>\r\nItalia entro 72 ore dalla richiesta. Durante il periodo di sospensione sarà comunque garantito<br>\r\n il servizio di noleggio ed acquisto di singoli contenuti e la fruizione dei contenuti gratuiti.<br>\r\nIl Cliente potrà richiedere la sospensione e la successiva riattivazione dell’abbonamento chiamando<br>\r\ngratuitamente il Servizio Clienti 187.', '&#8226 Per maggiori informazioni vai sul sito timvision.it o chiama il Servizio Clienti 187.'),
(2, 'Contributo di attivazione', 'nessuno', '-', '-'),
(3, 'Offerta TIMvision', '10&#8364 /mese', '5&#8364 /mese con<br>\r\ndecoder incluso', 'Per tutti i Clienti con<br>\r\nlinea fissa che<br>\r\nattivano TIMvision<br>\r\nentro il 30/06/2016');

-- --------------------------------------------------------

--
-- Struttura della tabella `AssService`
--

CREATE TABLE IF NOT EXISTS `AssService` (
  `IdC` int(5) NOT NULL,
  `Cat` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `Nome` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `Contenuto` varchar(1000) COLLATE latin1_general_ci NOT NULL,
  `Cont2` varchar(1000) COLLATE latin1_general_ci NOT NULL,
  `Cont3` varchar(1000) COLLATE latin1_general_ci NOT NULL,
  `Cont4` varchar(1000) COLLATE latin1_general_ci NOT NULL,
  `Cont5` varchar(1000) COLLATE latin1_general_ci NOT NULL,
  `Cont6` varchar(1000) COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`IdC`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dump dei dati per la tabella `AssService`
--

INSERT INTO `AssService` (`IdC`, `Cat`, `Nome`, `Contenuto`, `Cont2`, `Cont3`, `Cont4`, `Cont5`, `Cont6`) VALUES
(1, 'SupConf', 'Configurazione mail i-Phone', '<h3>Configurazione mail su iPhone</h3><br>\r\n<p> Per aggiungere il tuo account di posta Alice su <b>iPhone</b>, tocca dal menu l''icona <b>Impostazioni</b>: <br>\r\n<img src="immagini/iphone-1.png"><br></p>', '<p>Nelle <b>Impostazioni</b>:<br>\r\n  &#8226 scegli la voce <b>Posta, contatti, calendari</b><br>\r\n  &#8226 quindi <b>Aggiungi account...</b><br>\r\n  &#8226 dall''elenco dei provider vai su <b>Altro:</b></p>\r\n\r\n<p>Ti comparirà una schermata che ti chiede <b>nome, indirizzo e password</b>, più<br>\r\nun campo <b>descrizione</b> per specificare l''account.<br>\r\nRiempi questi campi e infine clicca <b>Avanti:</b></p>', '\r\n<p><img src="immagini/iphone-2.jpg"><br>\r\nL''iPhone nei passaggi successivi verifica <b>automaticamente</b> l''esistenza dell''account e il corretto<br>\r\nfunzionamento dei server di posta in entrata ed in uscita:<br>\r\n\r\n     &#8226 Se visualizzi il seguente avviso al termine della verifica ; tocca il tasto Si per completare la<br>\r\n   configurazione:<br>\r\n<img src="immagini/iphone-3.jpg"><br>\r\n</p>\r\n', '\r\n<p>Potrai accedere al tuo account ora ti basta semplicemente cliccare l''icona Mail dal menù principale <br>\r\ne selezionarlo.<br><br>\r\n<img src="immagini/iphone-4.png"><br><br>\r\nSe trovi comunque difficoltà nella configurazione, ti informiamo che è disponibile il nostro servizio di<br>\r\nassistenza a pagamento SOS PC: il personale tecnico concorderà un intervento personalizzato per<br>\r\nconfigurare in maniera ottimale il tuo iPhone.<br><br>\r\n<img src="immagini/iphone-5.jpg"></p>', '<h4>FAQ</h4>\r\n\r\n<p>\r\n<span class="notallowed"><a href="#">&#8226 Non invio mail</a></span><br>\r\n<span class="notallowed"><a href="#">&#8226 Non voglio ricevere alcuni messaggi</a></span><br>\r\n<span class="notallowed"><a href="#">&#8226 Come verifico il mittente</a></span><br>\r\n<span class="notallowed"><a href="#">&#8226 Come associo TIM mail al numero TIM</a></span><br>\r\n<span class="notallowed"><a href="#">&#8226 Ho dimenticato username e password</a></span>\r\n</p>', '<span class="notallowed" class="dispf" id="assdispf"><a href="#"><img src="immagini/dispc1.png"><br> Apple<br>iPhone SE</a></span>\r\n<span class="notallowed" id="assdispf"><a href="#"><img src="immagini/dispc2.png"><br> Apple<br>iPhone 6s</a></span>\r\n<span class="notallowed" id="assdispf"><a href="#"><img src="immagini/dispc3.png"><br> Apple<br>iPhone 6s Plus</a></span>\r\n<span id="assdispf"><a href="#device"><img src="immagini/dispc4.png"><br> Apple<br>iPhone 6</a></span>\r\n<span class="notallowed" id="assdispf"><a href="#"><img src="immagini/dispc5.png"><br> Apple<br>iPhone5s 16GB</a></span>');

-- --------------------------------------------------------

--
-- Struttura della tabella `dispos`
--

CREATE TABLE IF NOT EXISTS `dispos` (
  `id_d` int(20) NOT NULL,
  `tipo_d` varchar(10) NOT NULL,
  `categoria_d` varchar(15) NOT NULL,
  `marca_d` varchar(15) NOT NULL,
  `nome_d` varchar(20) NOT NULL,
  `memoria1_d` varchar(30) DEFAULT NULL,
  `memoria2_d` varchar(30) DEFAULT NULL,
  `display_d` float DEFAULT NULL,
  `display_tvSL` varchar(100) DEFAULT NULL,
  `dimens_tvSL` varchar(30) DEFAULT NULL,
  `caratt_tvSL` varchar(100) DEFAULT NULL,
  `prz_int_d` float(8,2) DEFAULT NULL,
  `prz_scn_d` float(8,2) NOT NULL,
  `sconto_d` int(5) DEFAULT NULL,
  `img1_d` varchar(200) NOT NULL,
  `img2_d` varchar(200) DEFAULT NULL,
  `img3_d` varchar(200) DEFAULT NULL,
  `img4_d` varchar(200) DEFAULT NULL,
  `video_d` varchar(50) DEFAULT NULL,
  `colore1_d` varchar(20) DEFAULT NULL,
  `colore2_d` varchar(20) DEFAULT NULL,
  `titDescr_d` varchar(1000) DEFAULT NULL,
  `descr_d` varchar(3000) DEFAULT NULL,
  `classBot_d` varchar(50) NOT NULL,
  `hrefBot_d` varchar(50) NOT NULL,
  `devicetitle` varchar(50) DEFAULT NULL,
  `servass1` varchar(200) DEFAULT NULL,
  `servass2` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_d`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `dispos`
--

INSERT INTO `dispos` (`id_d`, `tipo_d`, `categoria_d`, `marca_d`, `nome_d`, `memoria1_d`, `memoria2_d`, `display_d`, `display_tvSL`, `dimens_tvSL`, `caratt_tvSL`, `prz_int_d`, `prz_scn_d`, `sconto_d`, `img1_d`, `img2_d`, `img3_d`, `img4_d`, `video_d`, `colore1_d`, `colore2_d`, `titDescr_d`, `descr_d`, `classBot_d`, `hrefBot_d`, `devicetitle`, `servass1`, `servass2`) VALUES
(1, 'ST', 'Smartphone', 'Huawei', 'Huawei P8', '16 Gb', '', 5.2, NULL, NULL, NULL, 449.90, 399.90, -20, 'immagini/huawei-p8.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '"notallowed"', '"#"', NULL, NULL, NULL),
(2, 'ST', 'iPhone', 'Apple', 'iPhone 6', '16 Gb', '64 Gb', 4.7, NULL, NULL, NULL, 739.90, 679.90, -10, 'immagini/iphone-6-grey-fronte.png', 'immagini/iphone-6-grey-retro.png', 'immagini/iphone-6-black-fronte.png', 'immagini/iphone-6-black-retro.png', '"https://www.youtube.com/embed/4Q0YT-JR4mI"', '#D9D9D9', '#000000', 'TECNOLOGIA:<br><br>CONNETTIVITA'':<br>GPS:<br>DISPLAY:<br>FOTOCAMERA:<br>MEMORIA INTERNA:<br>PROCESSORE:<br>DIMENSIONI:<br>PESO:<br>AUTONOMIA:<br><br>IN DOTAZIONE:', 'Abilitato tecnologia 4G LTE/ HSDPA 42/ HSUPA/<br>HSPA+/ UMTS/ EDGE/ GPRS<br>4G LTE e Wi-Fi 802.11ac<br>Integrato<br>Retina HD da 4,7" con risoluzione di 1334x750 pixel<br>iSight da 8 megapixel con Focus Pixels e flash True Tone<br>16 GB / 64 GB<br>Chip A8 con coprocessore di movimento M8, 1.4 GHz Dual Core<br>138.1 x 67 x 6.9 mm<br>129 g<br> Stand-by fino a 250 ore ore<br>Conversazione fino a 840 min<br>Auricolari Apple EarPods con telecomando e microfono - <br>Cavo da Lightning a USB  -  Alimentatore USB  -  Manuale', '"botiPhone"', '"#device"', 'SERVIZI DI ASSISTENZA', '<div id="confiPhoneLink"><a href="#asspage"><img class="imgServass" src="immagini/ConfigMail.png"><br>\r\n<p>-Configurazione mail iPhone</p></a>\r\n</div>', '<div  class="notallowed" id="confConnLink"><a href="#"><img  class="imgServass" src="immagini/ConfigConnInternet.png"><br>\r\n<p>-Come connettersi ad internet</p></a>\r\n</div>'),
(3, 'ST', 'Smartphone', 'BlackBerry', 'BlackBerry PRIV', '32 Gb', '', 5.4, NULL, NULL, NULL, NULL, 849.90, NULL, 'immagini/BlackBarryPriv.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '"notallowed"', '"#"', NULL, NULL, NULL),
(4, 'ST', 'Smartphone', 'Nokia', 'Nokia Lumia 650', '16 Gb', '', 5, NULL, NULL, NULL, NULL, 239.90, NULL, 'immagini/Lumia650.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '"notallowed"', '"#"', NULL, NULL, NULL),
(5, 'TSL', 'Smart-TV', 'Samsung', 'Smart-TV', NULL, '', NULL, 'Ultra HD', '3840 x 2160 -50"', NULL, NULL, 939.00, NULL, 'immagini/smart_tv.png', NULL, NULL, NULL, '"https://www.youtube.com/embed/QjLs3AFHpNI"', '#000000', NULL, 'MODELLO:<br>DISPLAY:<br>DIMENSIONI:<br>IN DOTAZIONE:', '50JU6400 - 50“<br>Ultra HD<br>3840 x 2160<br>Soundbar HW-J250<br>TIMvision', '"botsmarttv"', '"#device"', 'SERVIZI ASSOCIATI', '<div id="confTimVLink"><a href="#timvision"><img  class="imgServsl" src="immagini/timvisionServ.png"></a></div>', '<div class="notallowed"  id="confTimSLink"> <a href="#"><img  class="imgServsl" src="immagini/mySkyServ.png"></a>\r\n</div>'),
(6, 'TSL', 'Smartwatch', 'Samsung', 'Galaxy Gear S', '16 Gb', '64 Gb', NULL, '4.7"', NULL, NULL, 399.90, 349.90, -15, 'immagini/galaxygears.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '"notallowed"', '"#"', NULL, NULL, NULL),
(7, 'TSL', 'Altro', 'Samsung', 'Gear-VR', NULL, '', NULL, '5.7" WQHD Note5<br><br><br><br><br><br>5.1" WQHD S6 edge', NULL, NULL, NULL, 129.90, NULL, 'immagini/gear_vr.png ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '"notallowed"', '"#"', NULL, NULL, NULL),
(8, 'TSL', 'Altro', 'D-Link', 'Camera Wi-Fi Fissa', NULL, '', NULL, NULL, NULL, 'notifiche push<br><br><br><br><br><br>istantanee in caso<br><br><br><br><br><br>di intrusione', NULL, 79.00, NULL, 'immagini/DLinkCam.png', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', '"notallowed"', '"#"', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Struttura della tabella `ServiziTvEntertainment`
--

CREATE TABLE IF NOT EXISTS `ServiziTvEntertainment` (
  `idTvEnt` int(11) NOT NULL AUTO_INCREMENT,
  `Per` varchar(10) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `Logo` varchar(150) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  `Descrizione` text CHARACTER SET latin1 COLLATE latin1_general_ci,
  `Immagine` varchar(100) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`idTvEnt`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dump dei dati per la tabella `ServiziTvEntertainment`
--

INSERT INTO `ServiziTvEntertainment` (`idTvEnt`, `Per`, `Logo`, `Descrizione`, `Immagine`) VALUES
(1, 'Tv', '<p><a class="intLink" href="#timvision"><img id="tvislogo" src="immagini/loghi/TimV.png"></a></p>', '<div><p id="tvistxt">I migliori contenuti del piccolo e grande schermo in HD on demand <br>\r\nper creare il tuo palinsesto personale senza pubblicità.<br>\r\nPiù di 8000 titoli in un abbonamento senza vincoli di durata.</p>', '<img id="tvisimg" src="immagini/timvision1.png"></div>'),
(2, 'Tv', '<p><span class="notallowed"><a href="#"><img id ="tskylogo" src="immagini/loghi/TimK.png"></a></span></p>', '<p id="tskytxt">Da oggi la fibra e l''ADSL di TIM portano SKY direttamente a casa tua<br>\r\nsenza parabola. TIM SKY è l''unica offerta con chiamate,<br>\r\ninternet senza limiti e tutto lo spettacolo di SKY.</p>', '<img id="tskyimg" src="immagini/timsky.png">'),
(3, 'Ms', '<p><span class="notallowed"><a  href="#"><img id="tmuslogo" src="immagini/loghi/TimM.png"></a></span></p>', '<p id="tmustxt">Ascolta tutti i migliori successi del momento, le novità<br>\r\ne goditi le playlist di tutti i generi, su smartphone senza consumare<br>\r\nGB, tablet e pc.</p>', '<img id="tmusimg" src="immagini/timmusic.jpg">'),
(4, 'Rd', '<p><span class="notallowed"><a  href="#"><img id="trealogo" src="immagini/loghi/TimR.png"></a></span></p>', '<p id="treatxt">Tutti i tuoi eBook preferiti sempre a portata di mano su Smartphone<br>\r\ne tablet, segui le tue passioni scegliendo tra i magazine<br> più amati e i quotidiani, dove vuoi e quando vuoi.</p>', '<img id="treaimg" src="immagini/timreading.jpg">'),
(5, 'Gm', '<p><span class="notallowed"><a  href="#"><img id="tgamlogo" src="immagini/loghi/TimG.png"></a></span></p>', '<p id="tgamtxt">Sparatutto, sport estremi, i migliori Classici e molto altro ancora...<br> \r\nCon TIMgames hai a disposizione centinaia di giochi per<br>\r\nil tuosmartphone e tablet, per divertirti dove e quando vuoi.</p>', '<img id="tgamimg" src="immagini/timgames.jpg">'),
(6, 'Sa', '<p><span class="notallowed"><a href="#"><img id="tsealogo" src="immagini/loghi/TimS.png"></a></span></p>', '<p id="tseatxt"> Tutti i migliori momenti della serie A TIM e del campionato<br>2015/2016 direttamente sul tuo smartphone o tablet<br>con l''App di TIM senza consumare GB!</p>', '<img id="tseaimg" src="immagini/timserieA.jpg">');

-- --------------------------------------------------------

--
-- Struttura della tabella `SupConf`
--

CREATE TABLE IF NOT EXISTS `SupConf` (
  `IdSup` int(40) NOT NULL,
  `Contenuto` varchar(1000) CHARACTER SET latin1 COLLATE latin1_general_ci NOT NULL,
  PRIMARY KEY (`IdSup`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `SupConf`
--

INSERT INTO `SupConf` (`IdSup`, `Contenuto`) VALUES
(1, '<p class="notallowed">- <a href="#">Assistenza tecnica specializzata con <br>SOSsmartphone</a></p>\r\n<p class="notallowed">- <a href="#">Buono sconto per cambio telefono</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">- <a href="#">Assistenza tecnica specializzata con <br> SOS PC</a></p>\r\n<p class="notallowed">- <a href="#">Servizio mappe sul telefonino</a></p>\r\n<p class="notallowed">- <a href="#">TIM application store</a></p>\r\n</span>'),
(2, '<p>- <a href="#asspage">Configurazione Mail su iPhone</a></p>\r\n<p class="notallowed">- <a href="#">Configurazione Mail su iPad</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">- <a href="#">Configurazione Mail su Android</a></p>\r\n<p class="notallowed">- <a href="#">Configurazione Mail su BlackBerry</a></p>\r\n<p class="notallowed">- <a href="#">Creazione account BlackBerry Internet<br> Services</a></p>\r\n</span>'),
(3, '<p class="notallowed">-<a href="#">Connettersi a Internet col telefonino</a></p>\r\n<p class="notallowed">-<a href="#">TIM Mail - Password dimenticata o altri problemi <br>\r\ndi accesso</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">-<a href="#">Gestisci e configura la tua TIM Mail su <br>\r\nSmartphone e Tablet</a></p>\r\n<p class="notallowed">-<a href="#">Gestisci e configura la tua Mail Tin.it <br>\r\nsu Smartphone e Tablet</a></p>\r\n<p class="notallowed">-<a href="#">Ibox diventa TIM Mail</a></p>\r\n</span>'),
(4, '<p class="notallowed">-<a href="#">Memotel</a></p>\r\n<p class="notallowed">-<a href="#">Avviso di Chiamata</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">-<a href="#">Trasferimento di Chiamata</a></p>\r\n<p class="notallowed">-<a href="#">Disabilita Chiamate</a></p>\r\n<p class="notallowed">-<a href="#">Guide prodotti di casa non commercializzati</a></p>\r\n</span>\r\n'),
(5, '<p class="notallowed">-<a href="#">Non chiamo e non ricevo telefonate</a></p>\r\n<p class="notallowed">-<a href="#">Ricevo ma non chiamo</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">-<a href="#">Chiamo ma non ricevo da un particolare <br>\r\ngestore telefonico</a></p>\r\n<p class="notallowed">-<a href="#">Chiamo ma non ricevo</a></p>\r\n<p class="notallowed">-<a href="#">La mia linea è rumorosa</a></p>\r\n</span>\r\n'),
(6, '<p class="notallowed">-<a href="#">Come gestire le chiamate entranti</a></p>\r\n<p class="notallowed">-<a href="#">Come riassegnare i numeri</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">-<a href="#">Problemi linea ISDN</a></p>\r\n<p class="notallowed">-<a href="#">Chiamo ma non ricevo</a></p>\r\n<p class="notallowed">-<a href="#">Borchia ISDN</a></p>\r\n</span>'),
(7, '<p class="notallowed">-<a href="#">Prima installazione</a></p>\r\n<p class="notallowed">-<a href="#">Modem fibra</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">-<a href="#">Come telefonare</a></p>\r\n<p class="notallowed">-<a href="#">Come navigare</a></p>\r\n<p class="notallowed">-<a href="#">Problemi più frequenti</a></p>\r\n<p class="notallowed">-<a href="#">Manuali modem fibra</a></p>\r\n\r\n</span>'),
(8, '<p class="notallowed">-<a href="#">ADSL2+ Wi-Fi N - DA2210</a></p>\r\n<p class="notallowed">-<a href="#">ADSL2 + Wi Fi N</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">-<a href="#">ADSL2 + Wi Fi N Technicolor</a></p>\r\n<p class="notallowed">-<a href="#">Alice Gate VoIP 2 plus Wi-Fi</a></p>\r\n<p class="notallowed">-<a href="#">Alice Gate2 plus Wi-Fi</a></p>\r\n<p class="notallowed">-<a href="#">Modem - Router generico</a></p>\r\n\r\n</span>'),
(9, '<p class="notallowed">-<a href="#">Powerline Adapter</a></p>'),
(10, '<p class="notallowed">-<a href="#">Velocità di allineamento del modem</a></p>\r\n<p class="notallowed">-<a href="#">Network Management</a></p>'),
(11, '<p class="notallowed">-<a href="#">Gestione Posta</a></p>\r\n<p class="notallowed">-<a href="#">Gestione Rubrica</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">-<a href="#">Gestione - Allegati</a></p>\r\n<p class="notallowed">-<a href="#">Gestione contatti Facebook</a></p>\r\n<p class="notallowed">-<a href="#">Impostazioni Profilo</a></p>\r\n\r\n\r\n</span>'),
(12, '<p class="notallowed">-<a href="#">Registrazione</a></p>\r\n<p class="notallowed">-<a href="#">Recupera Username e Password</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">-<a href="#">Crea una password sicura</a></p>\r\n<p class="notallowed">-<a href="#">Modifica Password</a></p>\r\n<p class="notallowed">-<a href="#">Impostazione e modifica cellulare di recupero</a></p>\r\n\r\n\r\n</span>'),
(13, '<p class="notallowed">-<a href="#">Parametri TIM Mail</a></p>\r\n<p class="notallowed">-<a href="#">Mail sul PC</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">-<a href="#">Mail su Smartphone e Tablet</a></p>\r\n<p class="notallowed">-<a href="#">Gestione opzioni posta</a></p>\r\n<p class="notallowed">-<a href="#">Server di posta</a></p>\r\n<p class="notallowed">-<a href="#">Parametri mail tin.it</a></p>\r\n\r\n</span>'),
(14, '<p class="notallowed">-<a href="#">Non invio mail</a></p>\r\n<p class="notallowed">-<a href="#">Non voglio ricevere alcuni messaggi</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">-<a href="#">Come verifico il mittente</a></p>\r\n<p class="notallowed">-<a href="#">Come associo TIM Mail al numero TIM</a></p>\r\n<p class="notallowed">-<a href="#">Ho dimenticato Username e Password</a></p>\r\n\r\n</span>'),
(15, '<p class="notallowed">-<a href="#">Decoder TIMvision</a></p>\r\n<p class="notallowed">-<a href="#">TIMvision da TV - Errori a video</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">-<a href="#">TIMvision da web</a></p>\r\n\r\n</span>'),
(16, '<p class="notallowed">-<a href="#">Caratteristiche TIM SKY</a></p>\r\n<p class="notallowed">-<a href="#">Installazione decoder My Sky HD</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">-<a href="#">Attivazione TIM SKY</a></p>\r\n<p class="notallowed">-<a href="#">Sky - Messaggi a video</a></p>\r\n\r\n</span>'),
(17, '<p class="notallowed">-<a href="#">Caratteristiche del servizio</a></p>\r\n<p class="notallowed">-<a href="#">Associazione dispositivi</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">-<a href="#">Visione contenuti</a></p>\r\n<p class="notallowed">-<a href="#">Errori più comuni</a></p>\r\n\r\n</span>'),
(18, '<p class="notallowed">-<a href="#">Problemi visione contenuti</a></p>\r\n<p class="notallowed">-<a href="#">Video di assistenza</a></p>'),
(19, '<p class="notallowed">-<a href="#">Configurazione DNS</a></p>\r\n<p class="notallowed">-<a href="#">Configurazione browser</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">-<a href="#">Configurazione firewall</a></p>\r\n\r\n</span>'),
(20, '<p class="notallowed">-<a href="#">Non mi connetto ad Internet</a></p>\r\n<p class="notallowed">-<a href="#">Cade la connessione</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">-<a href="#">Navigo lentamente</a></p>\r\n<p class="notallowed">-<a href="#">Non navigo</a></p>\r\n<p class="notallowed">-<a href="#">Problemi connessione dial up</a></p>\r\n\r\n</span>'),
(21, '<p class="notallowed">-<a href="#">Requisiti minimi e Software supportati</a></p>\r\n<p class="notallowed">-<a href="#">Installazione e aggiornamento del software</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">-<a href="#">Acquisto e attivazione licenza</a></p>\r\n<p class="notallowed">-<a href="#">Protezione Computer</a></p>\r\n<p class="notallowed">-<a href="#">Protezione Internet</a></p>\r\n\r\n</span>'),
(22, '<p class="notallowed">-<a href="#">Requisiti minimi e software supportati</a></p>\r\n<p class="notallowed">-<a href="#">Installazione e aggiornamento del software</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">-<a href="#">Acquisto e attivazione licenza</a></p>\r\n<p class="notallowed">-<a href="#">Come installare il software su un altro PC</a></p>\r\n<p class="notallowed">-<a href="#">Protezione Internet</a></p>\r\n\r\n</span>'),
(23, '<p class="notallowed">-<a href="#">Phishing: difenditi dalle e-mail e dagli SMS <br>sospetti!</a></p>\r\n<p class="notallowed">-<a href="#">Navigare sicuri</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">-<a href="#">Servizio TIM Antivirus</a></p>\r\n<p class="notallowed">-<a href="#">Tutela dei minori</a></p>\r\n<p class="notallowed">-<a href="#">Virus informatici</a></p>\r\n\r\n</span>'),
(24, '<p class="notallowed">-<a href="#">Phishing</a></p>\r\n<p class="notallowed">-<a href="#">Virus</a></p>\r\n<span class="unseen">\r\n<p class="notallowed">-<a href="#">Spam - Mail Bombing</a></p>\r\n<p class="notallowed">-<a href="#">Mail Delivery</a></p>\r\n<p class="notallowed">-<a href="#">Mancata ricezione di un messaggio<br> (Black List)</a></p>\r\n\r\n</span>');

-- --------------------------------------------------------

--
-- Struttura della tabella `TimVision`
--

CREATE TABLE IF NOT EXISTS `TimVision` (
  `IdVis` int(11) NOT NULL,
  `Contenuto` varchar(500) CHARACTER SET latin1 COLLATE latin1_general_ci DEFAULT NULL,
  `Immagine` varchar(300) CHARACTER SET latin1 COLLATE latin1_general_ci DEFAULT NULL,
  PRIMARY KEY (`IdVis`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `TimVision`
--

INSERT INTO `TimVision` (`IdVis`, `Contenuto`, `Immagine`) VALUES
(1, NULL, '<p><img id="logotv" src="immagini/logotimV.png"></p>'),
(2, '<p id="tit">Più di 8000 titoli in un abbonamento per cinema, serie TV, documentari e concerti<br>\r\non demand; tutto in un unico decoder in HD per offrirti il meglio in una soluzione<br>\r\nunica e compatta.<br></p>', NULL),
(3, '<div id="categoria"> <h3 id="title">	&#8226 Cinema:</h3>\r\n<p>Tutte le migliori proposte di film con le anteprime più attese,<br>\r\ni grandi classici, gli inediti, i film d''azione, thriller, animazione e<br>\r\ncommedie per tutta la famiglia; goditi i migliori spettacoli<br>\r\ninteramente in HD.</p>', '<img id="catimg" src="immagini/timvision_cinema.jpg"></div>'),
(4, '<div id="categoria"> <h3 id="title">&#8226 Serie TV:</h3><p>\r\nTutti gli episodi delle migliori serie TV, dalle più famose alle più<br>\r\nesclusive, disponibili immediatamente e da vedere tutte d&#8217 un<br>\r\nfiato e, per non interrompere la tua maratona, puoi guardare<br>\r\nTIMvision anche sul WEB, su Smartphone e Tablet.</p>\r\n', '<img id="catimg" src="immagini/timvision_serietv.jpg"></div>'),
(5, '<div id="categoria"> <h3 id="title">• Kids & junior:</h3><p>\r\nLe serie più belle e amate dai più piccoli sono disponibili su<br>\r\nTIMvision, senza interruzioni pubblicitarie e con la tranquillità e<br>\r\nla sicurezza del parental control.</p>\r\n', '<img id="catimg" src="immagini/timvision_kids.jpg"></div>'),
(6, '<div id="categoria"> <h3 id="title">&#8226 Musica:</h3><p>\r\nOltre 50 Concerti ed eventi live dei migliori artisti italiani ed<br>\r\ninternazionali per essere accompagnati dalla migliore musica,<br>\r\ndove e quando vuoi</p>', '<img id="catimg" src="immagini/timvision_concerti.jpg"></div>'),
(7, '<div id="categoria"> <h3 id="title">&#8226 Documentari:</h3><p>\r\nUna selezione dei migliori documentari per entrare nel cuore       <br>più\r\nvivo della natura nella sua espressione più meravigliosa\r\ne <br>per riviverne la sua grande storia.</p>', '<img id="catimg2" src="immagini/timvision.jpg"></div>'),
(8, '<div id="categoria"> <h3 id="title">&#8226 app TIMvision:</h3><p>\r\nCon l &#8217 App TIMvision potrai vedere cartoni, cinema, serie TV,                        <br>documentari\r\n sempre on demand.</p>', '<img id="catimg2" src="immagini/apptimvision.png"></div>'),
(9, NULL, '<a href="#device" onclick="idDevicePressed(5);"><div id="dispvis1"><img src="immagini/timv_1.png">\r\n<p>Smart TV</div></a>\r\n<div id="dispvis2" class="notallowed"><a href="#"><img src="immagini/timv_2.png">\r\n<br>Decoder<br> TimVision</a></div>');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
