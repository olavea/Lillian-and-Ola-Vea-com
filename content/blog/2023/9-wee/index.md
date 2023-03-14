```js
import React from "react";
import { graphql } from "gatsby";


export default function PizzasPage() {
        return (
            <>
                <p>
                    Header tagline wes cool
                </p>
            </>
        )
    }

export const query = graphql`
    query PizzaQuery {
        allSanityPiza {
            nodes {
                name
                id
                slug {
                    current
                }
                toppings {
                    id
                    name
                }
                image {
                    asset {
                        fluid(maxWidth: 400) {
                            ...GatsbySanityImageFluid
                        }
                    }

                }
            }
        }
    }
`;







```
```js
import React from "react";

class App extends React.Component {
    render( ) {
        return (
            <div className="cat">
                <div className="menu" >
                    <Header tagline="wes cool" />
                </div>
            </div>
        )
    }
}
export default App;

import React from "react";

class Header extends React.Component {
    render( ) {
        return (
            <>
                <h3>{this.props.tagline}</h3>
            </>
        )
    };
};
export default Header;
```






```js
import React from "react";

class App extends React.Component {
    render( ) {
        return (
            <div className="cat">
                <div className="menu" >
                    <Header tagline="wes is cool" />
                </div>
            </div>
        )
    }
}
export default App;

import React from "react";

class Header extends React.Component {
    render( ) {
        return (
            <>
                <h3>{this.props.tagline}</h3>
            </>
        )
    };
};
export default Header;
```

```html

                <img src="dog.jpg" alt="Dog">
                <input type="text"

```


```js
authHandler = async authData => {
    // 1 Look
    const store = await base.fetch(this.props.storeid, {context: this});

    // 2 Claim
    if (!store.owner ) {
        // Save it as our own
        await base.post(`${this.props.storeid}/owner`, {data: authData.user.uid});
        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid,
        })
    }
    // 3. Set the state

}



state = {
    uid: null,
    owner: null,
}
// A fu pass
authHandler = async authData => {

    // 1 Look up the current store in firbase
    const store = await base.fetch(this.props.storeId, {context: this});

    // 2 Claim it if there is no owner
    if(!store.owner) {
        // Save it as our own
        await base.post(`${this.props.storeId}/owner`, {
            data: authData.user.uid
        });
    };

    // 3. Set the state
    this.setState({
        uid: authData.user.uid,
        owner: store.owner || authData.user.uid
    })
}



// A fu pass
authH
    // 1 Look up the current store in firbase

    // 2 Claim it if there is no owner

        // Save it as our own

    // 3. Set the state





































```