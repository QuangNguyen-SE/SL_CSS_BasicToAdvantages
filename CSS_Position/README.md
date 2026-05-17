# Position 
- Position in CSS is one of the most important attribute in CSS
- Define the position of the tag
- Useful for styling and arrange tag
# Top, left, right, bottom
- There are attributes go with **position** 

## There are 5 values go with position

### 1. Static (default)
- This is the default value of almost tag in html
- Make the tag not moving. 
- It will stay exactly as same as order following by DOM Tree

### 2. Relative
- This value make the tag *moving RELATIVE* from its original position
- Use with 4 attribute (top, left, right, bottom) to set up.
- When the tag moving it will not push another tag or break the structure of DOM Tree
- It can overlap on the other tag
### 3. Absolute
- This make the tag's position **DEPEND ON** ancestor tag, but it will **skip any STATIC** position (not depend on the default position tag).

- It need **reference frame** to adjust its position by *top-left-right-bottom*.

- If no ancestor tag has position difference STATIC, it will take the &lt;html&gt; tag to be its **reference frame**

- It will make the tag **floating out of the DOM TREE's structure**. The tag won't belong to any cointainer, and it will overlap another tag.

- Relation of position **Absolute** and **Relative** in design. (in example NavBar folder)

### 4. Fixed
- This position make its tag are anchor to the viewport of your screen, it complete ignore scrolling
- Its tag will **floating up**, so it will cause the overlap
- Using the most on creating modal-box (Notification, Register form, ...)
### 5. Sticky 
- It is a **version of the combine RELATIVE and FIXED**
- First it will start up like position RELATIVE
- Then it will stick to the screen depend on setting up how much threshold (set it with top to get sticky on the screen). Become FIXED