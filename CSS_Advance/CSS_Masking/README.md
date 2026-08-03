# Masking
- Masking in css is a technicial skill to place a img layer over another img layer.
- Basically, using `masking-image` to generally create img stack layer.

## masking-image
- The logic behind a function:
    - **The darkness color** of mask-img will be placed by main-img.
    - Whereas **the brightness color(nearly to transparent)** of mask-img will hid the rest of main-img.
    - `mask-image: url();`.

## masking-composite
- `masking-composite` is a property which create a stack img-layer over and over together.
- Just only working when there are more than two masking-image layer.
- There are 4 value can be use in:
    - Example if there are 2 circle mask-image offset circles (không đối xứng tâm).
    1. `add`: 
        - It's default value, can see all the part of 2 circles intersect and overplace.
    2. `subtract`: 
        - The area will be removed from the visible area of the previous layer.
    3. `intersect`: 
        - Just only visible the intersect of 2 circles
    4. `exclude`: 
        - Just only visible the exclude, intersect parts are hid.
## mask-clip
- The same as `clip-path`.
## mask-mode

## mask-position

## mask-repeat

## mask-size

## mask-type

# NOTE VOCAB:
- Missmatch
- Discrepancy
