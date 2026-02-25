## Bug 1:
Description:
When an item gets removed before checkout page we can still proceed with the checkout process

Steps:
1. Login as a standard user
2. Add items to card
3. click on cart button
4. remove all items
5. click on checkout button
6. Proceed with checkout

Severity:P2 because block any functionality but a bug on production needs to be fixed for better UX

Environment: Production, Chrome, Windows 11, Intel i5-10500H

Expected: Checkout button should be disabled when 0 items are present in cart
Actual: Empty cart could be checked out too
User : Standard_User

## Bug 2:

Description: Red Shirt name contains the class from which it is derived.

Steps:
1. Login as a standard user
2. View the Item Red shirt (last in first page of all items)

Severity: p1

Reason: Abstraction Failed.

Environment: Production, Chrome, Windows 11, Intel i5-10500H

Expected: User shd only see the item name not the code logic.

Actual: Users can See the address from where the shirt is picked logically.
User: Standard User

## Bug 3:
Description: (Responsiveness Bug)Too much white space present in item cards for iphone se.

Steps:
1. Login as a standard user
2. View thwe items card in iphone se scren size

Severity: p3

Reason: Responsiveness not handled correctly.

Environment: Production, Chrome, Windows 11, Intel i5-10500H(Device responsiveness for iphone se)

Expected: White space shd be correctly handled.

Actual: Too much white space present under item for iphone se.
User: Standard User

## Bug 4
Description: Reset app state button is removing the items from the cart but the items selected remains selected.

Steps:
1. Login as a standard User
2. Add items to cart
3. Click on navbar icon
4. click on 'Reset App' button from navbar
5. Observe the count on cart (in top right) get changed  but selected items still remains selected

Severity: p1

Reason: Reset functionality is not functional for selected items.

Environment: Production, Chrome, Windows 11, Intel i5-10500H

Expected: Added items shd be unselected as we Click on ' Reset App State button'.

Actual: Selected Items remains selected.
User: Standard User

## Bug 5:
Description: User cant login in one go.

Steps:
1. Navigate to Login page
2. Enter the credentials for performance_glitch_user
3. Click login button

Severity: p1

Reason: blocking the user from entering in one go.

Environment: Production, Chrome, Windows 11, Intel i5-10500H

Expected: User shd be able to access the website easily & in one click.

Actual: Login requires two click for performance_glitch_user.
User: Performance_glitch_user
