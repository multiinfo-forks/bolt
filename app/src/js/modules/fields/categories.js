/**
 * Handling of categories input fields.
 *
 * @mixin
 * @namespace Bolt.fields.categories
 *
 * @param {Object} bolt - The Bolt module.
 * @param {Object} $ - jQuery.
 */
(function (bolt, $) {

    /**
     * Bolt.fields.categories mixin container.
     *
     * @private
     * @type {Object}
     */
    var categories = {};

    /**
     * Bind categories field.
     *
     * @static
     * @function init
     * @memberof Bolt.fields.categories
     *
     * @param {Object} fieldset
     * @param {FieldConf} fconf
     */
    categories.init = function (fieldset, fconf) {
        var select = $(fieldset).find('select');

        select.select2({
            width: '100%',
            allowClear: true,
            placeholder: {
                id: '',
                text: bolt.data('field.categories.text.placeholder')
            }
        });
    };

    // Apply mixin container
    bolt.fields.categories = categories;

})(Bolt || {}, jQuery);
