document.addEventListener('DOMContentLoaded', () => {

    // --- 1. BENTO BOX MODAL GENERATOR ---
    const createBentoLayout = (title, intro, imgUrl, quote, quoteSource, detailsHTML) => {
        return `
            <div class="sacrament-bento-grid" style="display: grid; grid-template-columns: 1.5fr 1fr; gap: 20px;">
                <div class="bento-box hero-box" style="background: var(--bg-main); padding: 30px; border-radius: 16px; grid-column: span 2;">
                    <h2 style="font-family: var(--font-serif); font-size: 2.5rem; color: var(--sacred-gold); margin-bottom: 10px;">${title}</h2>
                    <p style="font-family: var(--font-serif); font-size: 1.2rem; color: var(--text-light); font-style: italic;">${intro}</p>
                </div>
                
                <div class="bento-box img-box" style="border-radius: 16px; overflow: hidden; height: 300px;">
                    <img src="${imgUrl}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>

                <div class="bento-box quote-box" style="background: var(--stone-grey); padding: 30px; border-radius: 16px; display: flex; flex-direction: column; justify-content: center;">
                    <blockquote style="font-family: var(--font-serif); font-size: 1.1rem; border-left: 3px solid var(--sacred-gold); padding-left: 15px; margin: 0;">"${quote}"</blockquote>
                    <cite style="display: block; margin-top: 15px; font-size: 0.8rem; text-transform: uppercase; font-weight: bold; color: var(--text-light);">${quoteSource}</cite>
                </div>

                <div class="bento-box detail-box" style="grid-column: span 2; padding: 20px; color: var(--text-main);">
                    ${detailsHTML}
                </div>
            </div>
        `;
    };

    // --- 2. SACRAMENT DATA ---
    const sacramentData = {
        baptism: createBentoLayout(
            "The Sacrament of Baptism",
            "Holy Baptism is the basis of the whole Christian life, the gateway to life in the Spirit and the door which gives access to the other sacraments.",
            "image/Baptism.png",
            "Baptism is the sacrament of regeneration through water in the word.",
            "Roman Catechism",
            `
            <h3>What is This Sacrament Called?</h3>
            <p>This sacrament is called Baptism, after the central rite by which it is carried out: to baptize (Greek baptizein) means to "plunge" or "immerse"; the "plunge" into the water symbolizes the catechumen's burial into Christ's death, from which he rises up by resurrection with him, as "a new creature." This sacrament is also called "the washing of regeneration and renewal by the Holy Spirit," for it signifies and actually brings about the birth of water and the Spirit without which no one "can enter the kingdom of God."</p>
            
            <h3>Baptism in the Economy of Salvation</h3>
            <p><strong>Christ's Baptism:</strong> All the Old Covenant prefigurations find their fulfillment in Christ Jesus. After his resurrection Christ gives this mission to his apostles: "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit."</p>
            <p><strong>Baptism in the Church:</strong> From the very day of Pentecost the Church has celebrated and administered holy Baptism. St. Peter declares: "Repent, and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins; and you shall receive the gift of the Holy Spirit."</p>
            
            <h3>The Grace of Baptism</h3>
            <p>By Baptism all sins are forgiven, original sin and all personal sins, as well as all punishment for sin. Baptism not only purifies from all sins, but also makes the neophyte "a new creature," an adopted son of God, a member of Christ, and a temple of the Holy Spirit. Baptism makes us members of the Body of Christ and incorporates us into the Church. It seals the Christian with the indelible spiritual mark (character) of his belonging to Christ.</p>
            `
        ),
        confirmation: createBentoLayout(
            "The Sacrament of Confirmation",
            "Baptism, the Eucharist, and the sacrament of Confirmation together constitute the 'sacraments of Christian initiation'.",
            "image/Confirmation.png",
            "By the sacrament of Confirmation, [the baptized] are more perfectly bound to the Church and are enriched with a special strength of the Holy Spirit.",
            "Lumen Gentium",
            `
            <h3>Confirmation in the Economy of Salvation</h3>
            <p>In the Old Testament the prophets announced that the Spirit of the Lord would rest on the hoped-for Messiah. The descent of the Holy Spirit on Jesus at his baptism by John was the sign that this was he who was to come. This fullness of the Spirit was to be communicated to the whole messianic people. Filled with the Holy Spirit the apostles began to proclaim "the mighty works of God."</p>
            
            <h3>The Signs and the Rite of Confirmation</h3>
            <p>To signify the gift of the Holy Spirit, an anointing with perfumed oil (chrism) was added to the laying on of hands. This anointing highlights the name "Christian," which means "anointed." The Eastern Churches call this sacrament Chrismation. In the West, Confirmation suggests both the ratification of Baptism and the strengthening of baptismal grace.</p>
            
            <h3>The Effects of Confirmation</h3>
            <p>The effect of the sacrament of Confirmation is the full outpouring of the Holy Spirit as once granted to the apostles on the day of Pentecost. It brings an increase and deepening of baptismal grace: it roots us more deeply in the divine filiation; it unites us more firmly to Christ; it increases the gifts of the Holy Spirit in us; and renders our bond with the Church more perfect.</p>
            
            <h3>Who can Receive This Sacrament?</h3>
            <p>Every baptized person not yet confirmed can and should receive the sacrament of Confirmation. To receive Confirmation one must be in a state of grace and should receive the sacrament of Penance in order to be cleansed for the gift of the Holy Spirit.</p>
            `
        ),
        eucharist: createBentoLayout(
            "The Sacrament of the Eucharist",
            "The holy Eucharist completes Christian initiation. At the Last Supper, our Savior instituted the Eucharistic sacrifice of his Body and Blood.",
            "image/Eucharist.png",
            "For in the blessed Eucharist is contained the whole spiritual good of the Church, namely Christ himself, our Pasch.",
            "Presbyterorum Ordinis",
            `
            <h3>The Eucharist - Source and Summit</h3>
            <p>The Eucharist is "the source and summit of the Christian life." By the Eucharistic celebration we already unite ourselves with the heavenly liturgy and anticipate eternal life.</p>
            
            <h3>What is This Sacrament Called?</h3>
            <p>It is called: Eucharist, The Lord's Supper, The Breaking of Bread, The Eucharistic assembly (synaxis), The memorial of the Lord's Passion and Resurrection, The Holy Sacrifice, The Holy and Divine Liturgy, Holy Communion, and Holy Mass (Missa).</p>
            
            <h3>The Eucharist in the Economy of Salvation</h3>
            <p><strong>The signs of bread and wine:</strong> At the heart of the Eucharistic celebration are the bread and wine that, by the words of Christ and the invocation of the Holy Spirit, become Christ's Body and Blood.</p>
            <p><strong>The institution of the Eucharist:</strong> The Lord instituted the Eucharist as the memorial of his death and Resurrection, and commanded his apostles to celebrate it until his return.</p>
            
            <h3>The Sacramental Sacrifice</h3>
            <p>We must consider the Eucharist as: thanksgiving and praise to the Father; the sacrificial memorial of Christ and his Body; the presence of Christ by the power of his word and of his Spirit.</p>
            
            <h3>The Paschal Banquet</h3>
            <p>The Mass is at the same time, and inseparably, the sacrificial memorial in which the sacrifice of the cross is perpetuated and the sacred banquet of communion with the Lord's body and blood. To receive communion is to receive Christ himself who has offered himself for us.</p>
            `
        ),
        penance: createBentoLayout(
            "The Sacrament of Penance",
            "Those who approach the sacrament of Penance obtain pardon from God's mercy for the offense committed against him.",
            "image/reconciliation.png",
            "The whole power of the sacrament of Penance consists in restoring us to God's grace and joining us with him in an intimate friendship.",
            "Roman Catechism",
            `
            <h3>Why a Sacrament of Reconciliation after Baptism?</h3>
            <p>The new life received in Christian initiation has not abolished the frailty and weakness of human nature, nor the inclination to sin. This is the struggle of conversion directed toward holiness and eternal life to which the Lord never ceases to call us.</p>
            
            <h3>Interior Penance</h3>
            <p>Jesus' call to conversion and penance does not aim first at outward works, but at the conversion of the heart, interior conversion. Interior repentance is a radical reorientation of our whole life, a return, a conversion to God with all our heart, an end of sin, and a turning away from evil.</p>
            
            <h3>The Acts of the Penitent</h3>
            <p>The acts of the penitent are essential elements of the sacrament. These include: Contrition (sorrow of the soul), Confession (disclosure of sins to a priest), and Satisfaction (penance to repair the harm caused by sin).</p>
            
            <h3>The Effects of This Sacrament</h3>
            <p>"The whole power of the sacrament of Penance consists in restoring us to God's grace and joining us with him in an intimate friendship." The sacrament brings about a true "spiritual resurrection," and reconciles us with the Church.</p>
            `
        ),
        anointing: createBentoLayout(
            "The Anointing of the Sick",
            "By the sacred anointing of the sick and the prayer of the priests the whole Church commends those who are ill to the suffering and glorified Lord.",
            "image/Anointing.png",
            "God has visited his people.",
            "Luke 7:16",
            `
            <div style="background-color: #fff3cd; border: 1px solid #ffeeba; color: #856404; padding: 15px; border-radius: 8px; margin-bottom: 20px; font-family: var(--font-body); font-size: 0.95rem;">
                <i class="fa-solid fa-circle-exclamation" style="margin-right: 8px;"></i>
                <strong>Important:</strong> Please kindly inform the care staff that a priest will be visiting to administer the Holy Sacraments.
            </div>

            <h3>Its Foundations in the Economy of Salvation</h3>
            <p><strong>Illness in human life:</strong> In illness, man experiences his powerlessness, his limitations, and his finitude. Every illness can make us glimpse death. It can also make a person more mature and provoke a search for God.</p>
            <p><strong>Christ the physician:</strong> Christ's compassion toward the sick and his many healings are a resplendent sign that "God has visited his people." He has come to heal the whole man, soul and body.</p>
            
            <h3>Who Receives and Who Administers This Sacrament?</h3>
            <p>The Anointing of the Sick "is not a sacrament for those only who are at the point of death. Hence, as soon as anyone of the faithful begins to be in danger of death from sickness or old age, the fitting time for him to receive this sacrament has certainly already arrived." Only priests (bishops and presbyters) are ministers of the Anointing of the Sick.</p>
            
            <h3>The Effects of the Celebration of This Sacrament</h3>
            <p><strong>A particular gift of the Holy Spirit:</strong> The first grace of this sacrament is one of strengthening, peace and courage.</p>
            <p><strong>Union with the passion of Christ:</strong> The sick person receives the strength and the gift of uniting himself more closely to Christ's Passion.</p>
            <p><strong>A preparation for the final journey:</strong> This last anointing fortifies the end of our earthly life like a solid rampart for the final struggles.</p>
            `
        ),
        'holy-orders': createBentoLayout(
            "The Sacrament of Holy Orders",
            "Holy Orders is the sacrament through which the mission entrusted by Christ to his apostles continues to be exercised in the Church until the end of time.",
            "image/Holy Orders.png",
            "Only Christ is the true priest, the others being only his ministers.",
            "St. Thomas Aquinas",
            `
            <h3>Why Is This Sacrament Called "Orders"?</h3>
            <p>The word order in Roman antiquity designated an established civil body, especially a governing body... Today the word "ordination" is reserved for the sacramental act which integrates a man into the order of bishops, presbyters, or deacons, and goes beyond a simple election... for it confers a gift of the Holy Spirit that permits the exercise of a "sacred power" (sacra potestas) which can come only from Christ himself through his Church... The laying on of hands by the bishop, with the consecratory prayer, constitutes the visible sign of this ordination.</p>
            
            <h3>The Sacrament in the Economy of Salvation</h3>
            <p>The chosen people was constituted by God as "a kingdom of priests and a holy nation." But within the people of Israel, God chose one of the twelve tribes, that of Levi, and set it apart for liturgical service... Instituted to proclaim the Word of God and to restore communion with God by sacrifices and prayer, this priesthood nevertheless remains powerless to bring about salvation, needing to repeat its sacrifices ceaselessly and being unable to achieve a definitive sanctification, which only the sacrifice of Christ would accomplish.</p>
            
            <h3>The One Priesthood of Christ</h3>
            <p>Everything that the priesthood of the Old Covenant prefigured finds its fulfillment in Christ Jesus, the "one mediator between God and men." The Christian tradition considers Melchizedek... as a prefiguration of the priesthood of Christ... The redemptive sacrifice of Christ is unique, accomplished once for all; yet it is made present in the Eucharistic sacrifice of the Church. The same is true of the one priesthood of Christ; it is made present through the ministerial priesthood without diminishing the uniqueness of Christ's priesthood.</p>
            
            <h3>Two Participations in Christ's Priesthood</h3>
            <p>The ministerial or hierarchical priesthood of bishops and priests, and the common priesthood of all the faithful participate, "each in its own proper way, in the one priesthood of Christ." While being "ordered one to another," they differ essentially. The ministerial priesthood is at the service of the common priesthood. It is directed at the unfolding of the baptismal grace of all Christians. The ministerial priesthood is a means by which Christ unceasingly builds up and leads his Church. For this reason it is transmitted by its own sacrament, the sacrament of Holy Orders.</p>
            
            <h3>In the Person of Christ the Head</h3>
            <p>In the ecclesial service of the ordained minister, it is Christ himself who is present to his Church as Head of his Body, Shepherd of his flock, high priest of the redemptive sacrifice, Teacher of Truth. This is what the Church means by saying that the priest, by virtue of the sacrament of Holy Orders, acts in persona Christi Capitis. Through the ordained ministry... the presence of Christ as head of the Church is made visible in the midst of the community of believers... This priesthood is ministerial. It is entirely related to Christ and to men. It depends entirely on Christ and on his unique priesthood; it has been instituted for the good of men and the communion of the Church.</p>
            
            <h3>In the Name of the Whole Church</h3>
            <p>The ministerial priesthood has the task not only of representing Christ... before the assembly of the faithful, but also of acting in the name of the whole Church when presenting to God the prayer of the Church, and above all when offering the Eucharistic sacrifice. "In the name of the whole Church" does not mean that priests are the delegates of the community. The prayer and offering of the Church are inseparable from the prayer and offering of Christ, her head; it is always the case that Christ worships in and through his Church.</p>
            `
        ),
        matrimony: createBentoLayout(
            "The Sacrament of Matrimony",
            "The matrimonial covenant, by which a man and a woman establish between themselves a partnership of the whole of life... has been raised by Christ the Lord to the dignity of a sacrament.",
            "image/Matrimony.png",
            "What therefore God has joined together, let no man put asunder.",
            "Matthew 19:6",
            `
            <h3>Marriage in God's Plan</h3>
            <p>Sacred Scripture speaks throughout of marriage and its "mystery," its institution and the meaning God has given it. The vocation to marriage is written in the very nature of man and woman as they came from the hand of the Creator. God who created man out of love also calls him to love—the fundamental and innate vocation of every human being.</p>
            
            <h3>Marriage in the Lord</h3>
            <p>On the threshold of his public life Jesus performs his first sign - at his mother's request - during a wedding feast. In his preaching Jesus unequivocally taught the original meaning of the union of man and woman is indissoluble.</p>
            
            <h3>The Celebration of Marriage</h3>
            <p>In the Latin Rite the celebration of marriage between two Catholic faithful normally takes place during Holy Mass. It is therefore fitting that the spouses should seal their consent to give themselves to each other through the offering of their own lives by uniting it to the offering of Christ for his Church made present in the Eucharistic sacrifice.</p>
            
            <h3>The Effects of the Sacrament</h3>
            <p><strong>The matrimonial bond:</strong> "The consent by which the spouses mutually give and receive one another is sealed by God himself." The covenant between the spouses is integrated into God's covenant with man.</p>
            <p><strong>The grace of the sacrament of Matrimony:</strong> This grace is intended to perfect the couple's love and to strengthen their indissoluble unity. By this grace they "help one another to attain holiness in their married life and in welcoming and educating their children."</p>
            
            <h3>The Domestic Church</h3>
            <p>Christ chose to be born and grow up in the bosom of the holy family of Joseph and Mary. The Church is nothing other than "the family of God." In our own time, believing families are of primary importance as centers of living, radiant faith. The family is the Ecclesia domestica (the domestic church).</p>
            `
        )
    };

    // --- HELPER: Contact Card Generator ---
    const createContactInfo = (sacramentName) => {
        return `
            <div style="background-color: var(--bg-main); border: 1px solid var(--stone-grey); border-radius: 12px; padding: 20px; margin-top: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); grid-column: span 2;">
                <h4 style="font-family: var(--font-serif); color: var(--sacred-gold); font-size: 1.1rem; margin-top: 0; margin-bottom: 15px; border-bottom: 1px solid var(--stone-grey); padding-bottom: 10px;">
                    <i class="fa-solid fa-circle-info" style="margin-right: 8px;"></i> More information ${sacramentName}?
                </h4>
                <p style="font-size: 0.95rem; line-height: 1.5; color: var(--text-main); margin-bottom: 10px;">
                    <strong>Parish Surgery:</strong><br>
                    Monday 5:30 pm - 6:30 pm at the Parish Office.
                </p>
                <div style="display: flex; gap: 20px; flex-wrap: wrap; font-size: 0.9rem;">
                    <div>
                        <i class="fa-solid fa-phone" style="color: var(--sacred-gold); margin-right: 5px;"></i>
                        <a href="tel:02084781895" style="color: var(--text-main); text-decoration: none; font-weight: 500;">020 8478 1895</a>
                    </div>
                    <div>
                        <i class="fa-solid fa-envelope" style="color: var(--sacred-gold); margin-right: 5px;"></i>
                        <a href="mailto:manorpark@brcdt.org" style="color: var(--text-main); text-decoration: none; font-weight: 500;">manorpark@brcdt.org</a>
                    </div>
                </div>
            </div>
        `;
    };

    // Append contact info to all sacraments
    Object.keys(sacramentData).forEach(key => {
        let name = "on this Sacrament";
        if (key === 'baptism') name = "Baptism";
        if (key === 'confirmation') name = "Confirmation";
        if (key === 'eucharist') name = "Eucharist";
        if (key === 'penance') name = "Reconciliation";
        if (key === 'anointing') name = "Anointing";
        if (key === 'holy-orders') name = "Holy Orders";
        if (key === 'matrimony') name = "Matrimony";

        const contactHTML = createContactInfo(name);

        // Inject as a new grid item at the end of the grid container
        // The HTML ends with </div> which closes the grid container.
        // We replace the last </div> with contactHTML + </div>
        sacramentData[key] = sacramentData[key].replace(/<\/div>\s*$/, match => contactHTML + match);
    });

    // --- 3. MODAL LOGIC (Sacraments) ---
    const modalOverlay = document.getElementById('sacrament-modal-overlay');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.getElementById('close-modal-btn');
    const squares = document.querySelectorAll('.sacrament-square');

    squares.forEach(square => {
        square.addEventListener('click', () => {
            const id = square.getAttribute('data-id');
            const content = sacramentData[id];
            if (content) {
                modalBody.innerHTML = content;
                modalOverlay.classList.remove('hidden');
                setTimeout(() => modalOverlay.classList.add('active'), 10);
            }
        });
    });

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        setTimeout(() => modalOverlay.classList.add('hidden'), 400);
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });

    // --- 4. CONTACT MODAL ---
    const contactLink = document.getElementById('contact-link');
    const contactOverlay = document.getElementById('contact-modal-overlay');
    const closeContactBtn = document.getElementById('close-contact-modal-btn');

    if (contactLink) {
        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            contactOverlay.classList.remove('hidden');
            setTimeout(() => contactOverlay.classList.add('active'), 10);
        });
    }

    const closeContactModal = () => {
        contactOverlay.classList.remove('active');
        setTimeout(() => contactOverlay.classList.add('hidden'), 400);
    };

    if (closeContactBtn) closeContactBtn.addEventListener('click', closeContactModal);
    if (contactOverlay) contactOverlay.addEventListener('click', (e) => { if (e.target === contactOverlay) closeContactModal(); });

    // --- 5. ANIMATIONS ---
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.travel-card, .welcome-panel, .sacrament-square').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
    });

    // --- 6. MASS CARDS ---
    const rectangles = document.querySelectorAll('.expandable-rectangle');
    const expandCard = (rect) => {
        rectangles.forEach(r => { r.classList.remove('open'); r.classList.add('closed'); });
        rect.classList.remove('closed'); rect.classList.add('open');
    };
    rectangles.forEach(rect => {
        rect.addEventListener('mouseenter', () => { if (window.innerWidth > 768) expandCard(rect); });
        rect.addEventListener('click', () => { if (window.innerWidth <= 768) expandCard(rect); });
    });

    // --- 7. VIDEO PARALLAX ---
    const heroText = document.getElementById('hero-main-text');
    const locationPill = document.querySelector('.location-pill');
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (heroText) {
            heroText.style.transform = `translateY(${scrollY * 0.4}px)`;
            heroText.style.opacity = 1 - (scrollY / 500);
        }
        if (locationPill) {
            locationPill.style.transform = `translateY(${scrollY * 0.2}px)`;
        }
    });

    // --- 8. MOBILE MENU LOGIC ---
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const closeMobileNavBtn = document.querySelector('.close-mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (hamburgerBtn && mobileNavOverlay && closeMobileNavBtn) {
        hamburgerBtn.addEventListener('click', () => {
            mobileNavOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });

        const closeMobileMenu = () => {
            mobileNavOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        };

        closeMobileNavBtn.addEventListener('click', closeMobileMenu);

        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        // Close on click outside (optional, but good UX)
        mobileNavOverlay.addEventListener('click', (e) => {
            if (e.target === mobileNavOverlay) {
                closeMobileMenu();
            }
        });
    }
});

// --- GLOBAL: ROSARY CALL ---
function joinRosaryCall() {
    const container = document.createElement('div');
    Object.assign(container.style, { position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', zIndex: '9999', backgroundColor: 'black', display: 'flex', flexDirection: 'column' });
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i> Close';
    Object.assign(closeBtn.style, { position: 'absolute', top: '20px', right: '20px', zIndex: '10000', padding: '10px 20px', background: 'rgba(255,255,255,0.2)', color: 'white', border: '1px solid white', borderRadius: '30px', cursor: 'pointer', backdropFilter: 'blur(10px)' });
    closeBtn.onclick = () => document.body.removeChild(container);
    const iframe = document.createElement('iframe');
    iframe.src = "https://ststephen.whereby.com/c4e488ee-bb20-483e-a9b3-ab72f43a297b";
    iframe.allow = "camera; microphone; fullscreen; speaker; display-capture";
    Object.assign(iframe.style, { width: '100%', height: '100%', border: 'none' });
    container.appendChild(closeBtn);
    container.appendChild(iframe);
    document.body.appendChild(container);
}

// --- Schools Overlay Functions (Global) ---
function openSchools() {
    const overlay = document.getElementById('schools-overlay');
    if (overlay) {
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeSchools() {
    const overlay = document.getElementById('schools-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// --- RCIA Overlay Functions (Global) ---
function openRCIA() {
    const overlay = document.getElementById('rcia-overlay');
    if (overlay) {
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeRCIA() {
    const overlay = document.getElementById('rcia-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// --- RCIA App Logic ---
const contentData = [
    {
        id: 0,
        title: "Welcome",
        shortTitle: "Welcome",
        icon: "fa-handshake",
        summary: `
            <p class="welcome-intro">You are welcome to contact the parish office by telephone or email or come to our Surgery on a Monday 5.30-6.30 pm at the parish office.</p>
            <div class="contact-grid">
                <div class="contact-item">
                    <span class="contact-label">Email</span>
                    <span class="contact-value">manorpark@brcdt.org</span>
                </div>
                <div class="contact-item">
                    <span class="contact-label">Phone</span>
                    <span class="contact-value">020 8478 1895</span>
                </div>
                <div class="contact-item">
                    <span class="contact-label">Clergy</span>
                    <span class="contact-value">Fr. Tony Grant</span>
                </div>
            </div>
        `,
        verses: []
    },
    {
        id: 1,
        title: "Eucharist",
        shortTitle: "Eucharist",
        icon: "fa-bread-slice",
        summary: `
            <div class="poetic-text">
                <p><span class="drop-cap">L</span>et everyone be struck with fear,<br>
                let the whole world tremble,<br>
                and let the heavens exult<br>
                when Christ, the Son of the living God,<br>
                is present on the altar in the hands of a priest!</p>

                <p>O wonderful loftiness and stupendous dignity!<br>
                O sublime humility!<br>
                O humble sublimity!<br>
                The Lord of the universe, God and the Son of God,<br>
                so humbles Himself<br>
                that for our salvation He hides Himself<br>
                under an ordinary piece of bread!</p>

                <p>Brothers, look at the humility of God,<br>
                and pour out your hearts before Him! <span class="text-xs text-gray-500">Ps 62:9</span><br>
                Humble yourselves<br>
                that you may be exalted by Him! <span class="text-xs text-gray-500">1 Pt 5:6</span></p>

                <p>Hold back nothing of yourselves for yourselves,<br>
                that He Who gives Himself totally to you<br>
                may receive you totally!</p>
            </div>
        `,
        verses: []
    },
    {
        id: 2,
        title: "Confession",
        shortTitle: "Confession",
        icon: "fa-user-secret",
        summary: "Although it can be intimidating, Confession provides profound relief. It allows one to be 'spiritually naked' and hear audible words of absolution from a priest acting in the name of Jesus, providing a psychological and spiritual release that often surpasses other forms of unburdening.",
        verses: [
            { text: "Whose sins you shall forgive, they are forgiven them; and whose sins you shall retain, they are retained.", ref: "John 20:23" },
            { text: "Confess therefore your sins one to another: and pray one for another, that you may be saved.", ref: "James 5:16" },
            { text: "If we confess our sins, he is faithful and just, to forgive us our sins, and to cleanse us from all iniquity.", ref: "1 John 1:9" }
        ]
    },
    {
        id: 3,
        title: "The Virgin Mary",
        shortTitle: "The Virgin Mary",
        icon: "fa-star",
        summary: "Catholics honor Mary as the mother of Jesus rather than worshipping her. Her presence is often seen as making the Church feel like a family or a home. Just as the Apostle John stood with Mary at the foot of the cross, the faithful believe they are part of a familial bond with Christ's mother.",
        verses: [
            { text: "Because he hath regarded the humility of his handmaid; for behold from henceforth all generations shall call me blessed.", ref: "Luke 1:48" },
            { text: "When Jesus therefore had seen his mother and the disciple standing whom he loved, he saith to his mother: Woman, behold thy son. After that, he saith to the disciple: Behold thy mother.", ref: "John 19:26-27" },
            { text: "And the angel being come in, said unto her: Hail, full of grace, the Lord is with thee: blessed art thou among women.", ref: "Luke 1:28" }
        ]
    },
    {
        id: 4,
        title: "The Rosary",
        shortTitle: "The Rosary",
        icon: "fa-pray",
        summary: "Described as 'Bible on beads', the Rosary is a tactile way to meditate on the life of Christ. It acts as a guide for prayer, keeping the mind focused and moving forward through the mysteries of faith, even amidst the distractions of daily life.",
        verses: [
            { text: "But Mary kept all these words, pondering them in her heart.", ref: "Luke 2:19" },
            { text: "For the rest, brethren, whatsoever things are true... think on these things.", ref: "Philippians 4:8" },
            { text: "And he went down with them, and came to Nazareth, and was subject to them. And his mother kept all these words in her heart.", ref: "Luke 2:51" }
        ]
    },
    {
        id: 5,
        title: "The Mass",
        shortTitle: "The Mass",
        icon: "fa-church",
        summary: "The Catholic Mass is centered on the Eucharist rather than just sermon or song. It is viewed as a mystical transport to the foot of the cross, where the goal is to unite objectively with the sacrifice of Jesus rather than to manufacture an emotional experience.",
        verses: [
            { text: "For my flesh is meat indeed: and my blood is drink indeed. He that eateth my flesh, and drinketh my blood, abideth in me, and I in him.", ref: "John 6:56-57" },
            { text: "And taking bread, he gave thanks, and brake; and gave to them, saying: This is my body, which is given for you. Do this for a commemoration of me.", ref: "Luke 22:19" },
            { text: "The chalice of benediction, which we bless, is it not the communion of the blood of Christ? And the bread, which we break, is it not the partaking of the body of the Lord?", ref: "1 Corinthians 10:16" }
        ]
    },
    {
        id: 6,
        title: "Family Values",
        shortTitle: "Family Values",
        icon: "fa-users",
        summary: "The faith emphasizes a culture of strong family bonds and an extended network of godparents. This structure creates a safety net and long-life connections between generations, ensuring children are raised in a supportive, interconnected community.",
        verses: [
            { text: "Behold the inheritance of the Lord are children: the reward, the fruit of the womb.", ref: "Psalm 126:3" },
            { text: "It is a proverb: A young man according to his way, even when he is old he will not depart from it.", ref: "Proverbs 22:6" },
            { text: "But as for me and my house we will serve the Lord.", ref: "Joshua 24:15" }
        ]
    },
    {
        id: 7,
        title: "Helping People",
        shortTitle: "Charity & Works",
        icon: "fa-hand-holding-heart",
        summary: "The tradition rejects spiritual lethargy. While salvation is through faith, there is a heavy emphasis on performing good works. The Church is historically known for founding hospitals and orphanages, holding the faithful to a high standard of serving the poor.",
        verses: [
            { text: "Amen I say to you, as long as you did it to one of these my least brethren, you did it to me.", ref: "Matthew 25:40" },
            { text: "For even as the body without the spirit is dead; so also faith without works is dead.", ref: "James 2:26" },
            { text: "He that hath mercy on the poor, lendeth to the Lord: and he will repay him.", ref: "Proverbs 19:17" }
        ]
    },
    {
        id: 8,
        title: "Fasting & Penance",
        shortTitle: "Fasting & Penance",
        icon: "fa-fish",
        summary: "In a modern world often characterized by indulgence, the Church requires physical discipline. Fasting provides a necessary spiritual balance to times of celebration, serving as a tool to drive out spiritual complacency.",
        verses: [
            { text: "Be converted to me with all your heart, in fasting, and in weeping, and in mourning.", ref: "Joel 2:12" },
            { text: "But thou, when thou fastest anoint thy head, and wash thy face; That thou appear not to men to fast, but to thy Father who is in secret.", ref: "Matthew 6:17-18" },
            { text: "Prayer is good with fasting and alms more than to lay up treasures of gold.", ref: "Tobias 12:8" }
        ]
    },
    {
        id: 9,
        title: "Global Community",
        shortTitle: "Global Community",
        icon: "fa-globe",
        summary: "The universality of the Church allows for connection anywhere in the world—from Austria to Singapore. Shared beliefs, liturgy, and saints create an instant connection and shared identity that transcends national borders.",
        verses: [
            { text: "There is neither Jew nor Greek: there is neither bond nor free: there is neither male nor female. For you are all one in Christ Jesus.", ref: "Galatians 3:28" },
            { text: "So we being many, are one body in Christ, and every one members one of another.", ref: "Romans 12:5" },
            { text: "One Lord, one faith, one baptism. One God and Father of all, who is above all, and through all, and in us all.", ref: "Ephesians 4:5-6" }
        ]
    },
    {
        id: 10,
        title: "Historical Connection",
        shortTitle: "History",
        icon: "fa-landmark",
        summary: "Catholicism maintains an organic historical thread reaching back to the early Church. Ancient cathedrals are not seen merely as museums but as spiritual homes, connecting modern believers with the ancestors who built them.",
        verses: [
            { text: "And I say to thee: That thou art Peter; and upon this rock I will build my church, and the gates of hell shall not prevail against it.", ref: "Matthew 16:18" },
            { text: "Therefore, brethren, stand fast; and hold the traditions which you have learned, whether by word, or by our epistle.", ref: "2 Thessalonians 2:14" },
            { text: "Teaching them to observe all things whatsoever I have commanded you: and behold I am with you all days, even to the consummation of the world.", ref: "Matthew 28:20" }
        ]
    },
    {
        id: 11,
        title: "Art & Culture",
        shortTitle: "Art & Culture",
        icon: "fa-palette",
        summary: "The tradition possesses a massive intellectual and artistic heritage designed to draw the soul upward. From grand architecture to simple chapels, sacred art serves as a window into the spiritual realm, transcending the mundane.",
        verses: [
            { text: "I have loved, O Lord, the beauty of thy house; and the place where thy glory dwelleth.", ref: "Psalm 25:8" },
            { text: "Confession and beauty are before him: holiness and magnificence in his sanctuary.", ref: "Psalm 95:6" },
            { text: "And I have filled him with the spirit of God... To devise whatsoever may be artificially made.", ref: "Exodus 31:3-4" }
        ]
    }
];

let currentReasonIndex = 0;

function renderReasonButtons() {
    const btnContainer = document.getElementById('button-container');
    if (!btnContainer) return;

    btnContainer.innerHTML = '';
    contentData.forEach((item, index) => {
        const btn = document.createElement('button');
        const isActive = index === currentReasonIndex;

        btn.className = `rcia-nav-btn ${isActive ? 'active' : ''}`;
        btn.onclick = () => loadReasonContent(index);

        btn.innerHTML = `
            <span class="font-medium">${item.shortTitle}</span>
        `;

        btnContainer.appendChild(btn);
    });
}

function loadReasonContent(index) {
    currentReasonIndex = index;
    const data = contentData[index];

    const titleEl = document.getElementById('reason-title');
    const numberEl = document.getElementById('reason-number');
    const textEl = document.getElementById('reason-text');
    const versesContainerEl = document.getElementById('verses-container');
    const contentDiv = document.querySelector('.fade-in');

    if (!titleEl || !numberEl || !textEl || !versesContainerEl || !contentDiv) return;

    // Simple fade effect
    contentDiv.style.opacity = '0';
    contentDiv.style.transform = 'translateY(10px)';

    setTimeout(() => {
        titleEl.textContent = data.title;
        numberEl.textContent = ''; // Removed numbers as requested
        textEl.innerHTML = data.summary;

        // Generate Verses HTML
        versesContainerEl.innerHTML = data.verses.map(v => `
            <div class="verse-card">
                <i class="fa-solid fa-quote-left verse-icon"></i>
                <div class="w-full">
                    <p class="verse-text">"${v.text}"</p>
                    <p class="verse-ref">— ${v.ref}</p>
                </div>
            </div>
        `).join('');

        contentDiv.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
        contentDiv.style.opacity = '1';
        contentDiv.style.transform = 'translateY(0)';
    }, 150);

    renderReasonButtons();
}

// Initialize RCIA Content if on the page
document.addEventListener('DOMContentLoaded', () => {
    const rciaContainer = document.getElementById('why-catholic-page');
    if (rciaContainer) {
        renderReasonButtons();
        loadReasonContent(0);
    }

    // Initialize Caritas Content if on the page
    const caritasGrid = document.getElementById('caritas-grid');
    if (caritasGrid) {
        initCaritas();
    }
});

// --- Caritas Logic ---
const caritasData = [
    // Leadership
    { role: "Priest", name: "Fr. Tony Grant", phone: "0208-478-1895", email: "manorpark@brcdt.org", category: 'leadership' },
    { role: "Parish Representative", name: "Susan Greaves", phone: "07960 031 159", email: "g_susan@hotmail.com", category: 'leadership' },

    // Advisors
    { role: "Lead Advisor", name: "Apaena Jayans", phone: "07553 991 305", email: "Jayansapaena805@gmail.com", category: 'advice' },
    { role: "Benefits Advisor", name: "Edison Lawrence", phone: "07770 143 757", email: "", category: 'advice' },
    { role: "Benefits Advisor", name: "Anita", phone: "07814 645 664", email: "", category: 'advice' },
    { role: "Housing Advisor", name: "Vida", phone: "07944 144 835", email: "", category: 'advice' },
    { role: "Legal Advisor", name: "Lucy Achola", phone: "07917 726 005", email: "Lucyachola55@gmail.com", category: 'advice' },
    { role: "Pensioners' Rights", name: "Vanessa", phone: "07762 151 734", email: "manorpark@brcdt.org", category: 'advice' },

    // Religious
    { role: "Religious (D.M.M.M)", name: "Sr. Rita Ihenacho & Sr. M. Fortunata", phone: "07448 975 174", email: "", category: 'religious' },
    { role: "Religious (Imm. Heart of Mary)", name: "Sr. Antoniata", phone: "07845 751 019", email: "", category: 'religious' },
    { role: "Religious (Sacred Heart)", name: "Sr. Breda Byrne", phone: "07858 689 427", email: "breda.byrne@btinternet.com", category: 'religious' },

    // Community & Special Support
    { role: "Refugee & Asylum Support", name: "Antony Fernando", phone: "07958 679 522", email: "Anton.mfernando@gmail.com", category: 'community' },
    { role: "Educational Needs", name: "Zina Alexander", phone: "07943 559 477", email: "Zina.alexander@gmail.com", category: 'community' },

    // Parishioners (Masked)
    {
        role: "The King’s Trust (Youth 16-30)",
        name: "Tina Paulo",
        phone: "HIDDEN",
        email: "HIDDEN",
        isParishioner: true,
        serviceDescription: "Support for young people (16-30) to get jobs, build confidence & skills.",
        category: 'community'
    },
    {
        role: "Charitable Organisations",
        name: "Ch Teja",
        phone: "HIDDEN",
        email: "HIDDEN",
        isParishioner: true,
        category: 'community'
    },
    {
        role: "SVP Support",
        name: "Gavi/Regina",
        phone: "HIDDEN",
        email: "HIDDEN",
        isParishioner: true,
        category: 'community'
    },
    {
        role: "Clothes Bank",
        name: "Annie M.",
        phone: "HIDDEN",
        email: "HIDDEN",
        isParishioner: true,
        category: 'food_warmth'
    },

    // Other Public Services
    { role: "SVP 1833 & Camps", name: "Kezia Harrow", phone: "07917 923 605", email: "KeziaH@svp.org.uk", category: 'community' },
    { role: "Hope 2 Humanity", name: "Support Team", phone: "0208 127 6290", email: "info@hope4humanity.org.uk", category: 'food_warmth', serviceDescription: "Hot meals (Sat/Sun) & Food Bank" },
    { role: "Renewal Programme", name: "Housing & Health", phone: "020 8471 6954", email: "info@renewalprogramme.org.uk", category: 'food_warmth' },
];

const PARISH_REP = {
    name: "Susan Greaves",
    phone: "07960 031 159",
    email: "g_susan@hotmail.com"
};

function initCaritas() {
    const grid = document.getElementById('caritas-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderCards(filter) {
        grid.innerHTML = '';

        const filteredData = filter === 'all'
            ? caritasData
            : caritasData.filter(item => item.category === filter);

        filteredData.forEach(data => {
            const isHidden = data.isParishioner;
            const displayName = isHidden ? "Parishioner Volunteer" : data.name;
            const displayPhone = isHidden ? PARISH_REP.phone : data.phone;
            const displayEmail = isHidden ? PARISH_REP.email : data.email;
            const contactLabel = isHidden ? `Contact Parish Rep: ${PARISH_REP.name}` : "";

            // Icon Selection
            let iconClass = "fa-users";
            if (data.category === 'leadership') iconClass = "fa-user";
            if (data.category === 'advice') iconClass = "fa-scale-balanced";
            if (data.category === 'religious') iconClass = "fa-cross";
            if (data.category === 'food_warmth') iconClass = "fa-heart";

            const card = document.createElement('div');
            card.className = `caritas-card cat-${data.category}`;

            card.innerHTML = `
                <div>
                    <div class="caritas-card-header">
                        <h3 class="caritas-role">${data.role}</h3>
                        <div class="caritas-icon">
                            <i class="fa-solid ${iconClass}"></i>
                        </div>
                    </div>
                    
                    ${data.serviceDescription ? `<p class="caritas-desc">${data.serviceDescription}</p>` : ''}
                    
                    <div class="caritas-name">
                        ${displayName}
                    </div>
                    
                    ${isHidden ? `<div class="caritas-contact-label">${contactLabel}</div>` : ''}
                </div>
                
                <div class="caritas-contact-info">
                    ${displayPhone ? `
                        <div class="caritas-contact-row">
                            <i class="fa-solid fa-phone"></i>
                            <a href="tel:${displayPhone}">${displayPhone}</a>
                        </div>
                    ` : ''}
                    ${displayEmail ? `
                        <div class="caritas-contact-row">
                            <i class="fa-solid fa-envelope"></i>
                            <a href="mailto:${displayEmail}">${displayEmail}</a>
                        </div>
                    ` : ''}
                </div>
            `;

            grid.appendChild(card);
        });
    }

    // Initial Render
    renderCards('all');

    // Filter Logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update Active State
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Render
            renderCards(btn.getAttribute('data-filter'));
        });
    });
}
    // --- 9. NEWSLETTER BUILDER ---
    const initNewsletterBuilder = async () => {
        const container = document.getElementById('newsletter-builder-container');
        if (!container) return; // Only run on newsletter page

        try {
            const response = await fetch('data/newsletter.json');
            if (!response.ok) throw new Error('Failed to load newsletter data');
            const data = await response.json();

            // 1. Apply Settings
            const root = document.documentElement;
            if (data.settings) {
                if (data.settings.primary_color) root.style.setProperty('--primary-color', data.settings.primary_color);
                if (data.settings.secondary_color) root.style.setProperty('--secondary-color', data.settings.secondary_color);
                // Note: Add other variables as needed (fonts, etc.)
            }

            container.innerHTML = ''; // Clear loading spinner

            // 2. Render Header
            if (data.header) {
                const headerHTML = `
                    <div class="glass-panel" style="margin-bottom: 20px; text-align: center; padding: 30px;">
                        <span class="inline-block py-1 px-3 rounded-full bg-white border border-primary-blue text-primary-blue text-xs font-bold uppercase tracking-wider mb-2 shadow-sm"
                            style="color: var(--primary-color); border: 1px solid var(--primary-color); background: rgba(255,255,255,0.8); padding: 5px 15px; border-radius: 20px; font-size: 0.8rem;">
                            ${data.header.badge_text || 'Weekly Newsletter'}
                        </span>
                        <h1 style="font-family: 'Cinzel', serif; font-size: 3rem; color: var(--primary-color); margin: 10px 0;">
                            ${data.header.title}
                        </h1>
                        <h2 style="font-family: 'Playfair Display', serif; font-size: 1.8rem; color: var(--text-color); margin-bottom: 10px;">
                            ${data.header.subtitle}
                        </h2>
                        <p style="font-size: 1.1rem; opacity: 0.8;">${data.header.description}</p>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', headerHTML);
            }

            // 3. Render Columns & Cards
            if (data.columns) {
                const columnsContainer = document.createElement('div');
                columnsContainer.className = 'newsletter-columns-container';
                Object.assign(columnsContainer.style, {
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    justifyContent: 'center',
                    alignItems: 'flex-start'
                });

                data.columns.forEach(colData => {
                    const colDiv = document.createElement('div');
                    colDiv.className = 'newsletter-column';
                    Object.assign(colDiv.style, {
                       flex: '1',
                       minWidth: '300px',
                       maxWidth: '400px'
                    });

                    if (colData.cards) {
                        colData.cards.forEach(cardData => {
                            const cardHTML = renderCard(cardData);
                            colDiv.insertAdjacentHTML('beforeend', cardHTML);
                        });
                    }
                    columnsContainer.appendChild(colDiv);
                });

                container.appendChild(columnsContainer);
            }

        } catch (error) {
            console.error('Error rendering newsletter:', error);
            container.innerHTML = `<div style="color:white; text-align:center;">Failed to load content. Please try again later.</div>`;
        }
    };

    const renderCard = (card) => {
        // Wrapper for standard glass card style
        const cardStart = `
            <div class="glass-card ${card.class || ''}">
                <div class="card-header">
                    <i class="fa-solid ${card.icon || 'fa-info'}"></i>
                    <h3>${card.title}</h3>
                </div>
                <!-- Content Area -->
        `;
        const cardEnd = `</div>`;

        let contentHTML = '';

        switch (card.type) {
            case 'mass_schedule':
                contentHTML = `<div class="scroll-content custom-scroll">`;
                if (card.days) {
                    card.days.forEach(day => {
                        contentHTML += `
                            <div class="mass-day" style="margin-bottom: 10px; border-bottom: 1px solid rgba(0,0,0,0.05); padding-bottom: 5px;">
                                <div class="mass-time-header" style="${day.title.includes('Morning Prayers') ? 'color: var(--primary-color);' : ''}">${day.title}</div>
                        `;
                        if (day.details) {
                            contentHTML += `<div style="font-size: 0.85rem;">${day.details}</div>`;
                        }
                        if (day.meta) {
                            contentHTML += `<div style="font-size: 0.85rem;">`;
                            day.meta.forEach(m => {
                                let style = "";
                                if (m.style === 'italic') style = "display:block; font-style:italic;";
                                if (m.style === 'bold-highlight') style = "display:block; font-weight: bold; color: var(--secondary-color);";
                                if (m.style === 'normal') style = "display:block;"; // or inline if intended, but legacy code used block mostly
                                
                                // Clean up 'display:block' if it's just a simple text line? 
                                // Actually, mass cards rely heavily on block stacking.
                                contentHTML += `<span class="intention" style="${style}">${m.text}</span>`;
                            });
                            contentHTML += `</div>`;
                        }
                        contentHTML += `</div>`;
                    });
                }
                contentHTML += `</div>`;
                break;

            case 'simple_text':
                contentHTML = `<div class="scroll-content custom-scroll">${card.content}</div>`;
                break;

            case 'accordion_group':
                contentHTML = `<div class="scroll-content custom-scroll">`;
                if (card.items) {
                    card.items.forEach(item => {
                        contentHTML += `
                            <article class="news-snippet">
                                <details ${item.open ? 'open' : ''}>
                                    <summary><strong>${item.summary}</strong></summary>
                                    <div style="margin-top:5px;">${item.content}</div>
                                </details>
                            </article>
                        `;
                    });
                }
                if (card.footer_text) {
                     contentHTML += `<article class="news-snippet">${card.footer_text}</article>`;
                }
                contentHTML += `</div>`;
                break;

            case 'finance':
                contentHTML = `
                    <div class="finance-amount">${card.amount}</div>
                    <div class="finance-breakdown">
                `;
                if (card.rows) {
                    card.rows.forEach(r => {
                        contentHTML += `<div class="row"><span>${r.label}</span>${r.value ? ` <span>${r.value}</span>` : ''}</div>`;
                    });
                }
                if (card.total_row) {
                    contentHTML += `
                         <div class="row" style="margin-top: 10px; padding-top: 10px; border-top: 1px solid rgba(0,0,0,0.1);">
                            <span><strong>${card.total_row.label}</strong></span> <span><strong>${card.total_row.value}</strong></span>
                        </div>
                    `;
                }
                if (card.extra_rows) {
                    card.extra_rows.forEach(r => {
                        const style = r.is_bold ? 'font-weight: bold; margin-top: 5px;' : '';
                        contentHTML += `<div class="row" style="${style}"><span>${r.label}</span> <span>${r.value}</span></div>`;
                    });
                }
                contentHTML += `</div>`; // End breakdown
                // Finance card acts different strictly speaking (no scroll-content wrapper usually)
                // but we can wrap it if needed or just return raw inner logic.
                // The switch case logic wraps everything in 'cardStart'...'cardEnd'.
                break;

            default:
                contentHTML = `<div class="scroll-content custom-scroll"><p>Unknown card type: ${card.type}</p></div>`;
        }

        return cardStart + contentHTML + cardEnd;
    };


    // Call init
    initNewsletterBuilder();
