const contacts = [
  {name: "mama",
  number: 111
  },
  {name: "papa",
  number: 123
  },
  {name: "bf",
  number: 333
  },
  {name: "jack",
  number: 456
  },
  {name: "sarah",
  number: 987
  },
];

/* vyberu z HTML template a pomoci handlebars vytvorim sablonu z jeho inner HTML a tu si ulozim do promenne */
const contactTemplate = Handlebars.compile(document.querySelector("#contact-template").innerHTML);

//vytvorim funkci, ktera vezme tento template, a vytvori a vrati nam HTML element podle dane sablony. Pouzije name a number
const renderContact = (contact) => {
  const fceElm = document.createElement("div");
  fceElm.innerHTML = contactTemplate(contact);
  return fceElm.children[0];
};

//pomoci for smycky vypisu vsechny kontakty na stranku 
for (let i=0; i < contacts.length; i++) {
document.querySelector(".contact__list").appendChild(renderContact(contacts[i]));
}
