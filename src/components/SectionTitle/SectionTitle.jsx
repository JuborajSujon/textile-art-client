import PropTypes from "prop-types";

const SectionTitle = ({ title, desctiption }) => {
  return (
    <div className="grid grid-cols-1 pb-8 text-center">
      <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold dark:text-slate-200 ">
        {title}
      </h3>

      <p className="text-slate-600 dark:text-slate-300 max-w-xl mx-auto font-chakraPetch">
        {desctiption}
      </p>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  desctiption: PropTypes.string,
};

export default SectionTitle;
